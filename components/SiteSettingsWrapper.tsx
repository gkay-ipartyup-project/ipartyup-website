"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import UnderConstruction from "./UnderConstruction"

export default function SiteSettingsWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // Default to live site immediately so visitors & search crawlers don't hit a blocking blank screen.
  const [underConstruction, setUnderConstruction] = useState<boolean>(false)
  const [launchDate, setLaunchDate] = useState<string>("")

  useEffect(() => {
    let cancelled = false

    const fetchSettings = async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value")

      if (cancelled) return

      if (!error && data) {
        const constructionModeRow = data.find((r) => r.key === "under_construction")
        const launchDateRow = data.find((r) => r.key === "construction_launch_date")

        if (constructionModeRow) {
          setUnderConstruction(!!constructionModeRow.value)
        }

        if (launchDateRow && launchDateRow.value) {
          setLaunchDate(String(launchDateRow.value))
        }
      }
    }

    fetchSettings()

    const channel = supabase
      .channel("site_settings_public")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "site_settings" },
        (payload: { new?: { key?: string; value?: unknown } }) => {
          if (cancelled) return
          if (payload.new) {
            if (payload.new.key === "under_construction") {
              setUnderConstruction(!!payload.new.value)
            } else if (
              payload.new.key === "construction_launch_date" &&
              payload.new.value
            ) {
              setLaunchDate(String(payload.new.value))
            }
          }
        }
      )
      .subscribe()

    return () => {
      cancelled = true
      supabase.removeChannel(channel)
    }
  }, [])

  if (underConstruction) {
    return <UnderConstruction launchDate={launchDate} />
  }

  return <>{children}</>
}
