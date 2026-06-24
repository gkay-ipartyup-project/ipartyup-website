"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import UnderConstruction from "./UnderConstruction";

export default function SiteSettingsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [underConstruction, setUnderConstruction] = useState<boolean | null>(null);
  const [launchDate, setLaunchDate] = useState<string>("July 20th, 2026");

  useEffect(() => {
    let cancelled = false;

    // 1. Initial query to fetch both construction mode and launch date
    const fetchSettings = async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value");

      if (cancelled) return;

      if (!error && data) {
        const constructionModeRow = data.find((r) => r.key === "under_construction");
        const launchDateRow = data.find((r) => r.key === "construction_launch_date");

        if (constructionModeRow) {
          setUnderConstruction(!!constructionModeRow.value);
        } else {
          setUnderConstruction(false);
        }

        if (launchDateRow && launchDateRow.value) {
          setLaunchDate(String(launchDateRow.value));
        }
      } else {
        // Fallback defaults on query failure
        setUnderConstruction(false);
      }
    };

    fetchSettings();

    // 2. Realtime subscription to receive updates instantly when toggled/edited from the desktop admin
    const channel = supabase
      .channel("site_settings_public")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "site_settings" },
        (payload: any) => {
          if (cancelled) return;
          if (payload.new) {
            if (payload.new.key === "under_construction") {
              setUnderConstruction(!!payload.new.value);
            } else if (payload.new.key === "construction_launch_date" && payload.new.value) {
              setLaunchDate(String(payload.new.value));
            }
          }
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  // Show a clean dark screen while loading settings to prevent flashing the site
  if (underConstruction === null) {
    return <div className="min-h-screen bg-[#0A0A0A]" />;
  }

  if (underConstruction) {
    return <UnderConstruction launchDate={launchDate} />;
  }

  return <>{children}</>;
}
