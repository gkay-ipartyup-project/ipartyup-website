import Image from "next/image"
import type { ReactNode } from "react"

function Q({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <h4 className="text-base font-bold text-stremio-green">{q}</h4>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-neutral-400">
        {children}
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="relative bg-stremio-dark pb-24 pt-20 lg:pt-24 -mt-16 z-0">
      <Image
        src="/turboabuelaa.png"
        alt="Turbo Granny Mascot"
        width={300}
        height={600}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden w-[250px] xl:block pointer-events-none z-10"
      />
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 className="text-center text-3xl font-light tracking-wide text-white">
          FAQ
        </h2>

        <div className="relative mx-auto mt-12 max-w-[560px]">
          <Q q="What is iPartyUp?">
            <p>
              iPartyUp is an all-in-one streaming app that brings movies, series,
              anime, documentaries, and more into a single place. Instead of
              paying for a handful of separate memberships just to watch the things
              you love, iPartyUp gives you one curated library — and the best
              watch-together experience anywhere, so you can enjoy it all in sync
              with your friends, your partner, or your family.
            </p>
          </Q>

          <Q q="Do I get anything for free when I sign up?">
            <p>
              Yes! Every new account gets 24 hours of full Premium access the
              moment you sign up — no payment, no card, nothing to cancel. You can
              explore the entire content library, host bigger watch parties,
              invite free-tier friends into premium content with you, and try every
              premium feature. After 24 hours you go to the standard free tier and
              can support the developer for permanent Premium any time.
            </p>
          </Q>

          <Q q="What's included in the library?">
            <p>
              iPartyUp's own library covers movies, full series and seasons, a
              massive anime catalogue with sub and dub options, and documentaries
              — with new titles added every week. You can also plug in public
              YouTube videos, YouTube Live streams, and your own Google Drive
              uploads. If something is missing, you can request it right from the
              app.
            </p>
          </Q>

          <Q q="How is this different from just watching the same link on a call?">
            <p>
              Very different. iPartyUp syncs playback frame-perfectly to every viewer
              automatically — no &quot;press play in 3, 2, 1&quot;, no drifting out of
              sync, no laggy screen-share. Hosts can pause, rewind, and skip for
              the whole room with one tap. There's a dedicated chat panel and
              optional voice chat built right next to the video, so reacting and
              talking feels natural instead of awkward.
            </p>
          </Q>

          <Q q="Do my friends need to pay to join?">
            <p>
              No. Anyone with a free account can join your rooms. Free users can
              host rooms up to 3 people, and Premium Supporters can host rooms up to
              12 and even invite free-tier friends into premium-only content with
              them.
            </p>
          </Q>

          <Q q="How much does iPartyUp cost?">
            <p>
              Free forever with the core library and watch-together features. If you
              want the entire library unlocked plus the bonus features, the Premium
              Supporter Plan is $5.99/month and you join through our Patreon. Just
              download iPartyUp, tap the Support Developer button on the dashboard,
              and your perks unlock the moment you join. You can pause or end the
              membership anytime from Patreon.
            </p>
          </Q>

          <Q q="What extra do Premium Supporters get?">
            <p>
              The entire content library unlocked, rooms up to 12 viewers, the
              ability to invite up to 2 free-tier friends into premium content with
              you, a floating fullscreen chat panel, a dashboard notification
              panel, continue-watching across sessions, a Premium Supporter badge,
              personal chat with the creator, faster content-request refresh (24h
              instead of 72h), and every upcoming perk as it ships.
            </p>
          </Q>

          <Q q="Which devices does iPartyUp run on?">
            <p>
              iPartyUp is currently available on Windows and macOS desktop. We're
              focused on nailing the desktop experience first. Mobile may come
              later based on community demand.
            </p>
          </Q>

          <Q q="Do you track what I watch?">
            <p>
              No. We do not track your viewing habits for advertising or profiling.
              We don't run ads and we don't sell your data — there's nothing to sell
              because we don't collect it. The only data we store is what's
              strictly needed to run the app (your account, your rooms, your
              friends list). You can delete everything anytime from the app.
            </p>
          </Q>

          <Q q="Can I request content that isn't in the library?">
            <p>
              Yes. Use the Request Content feature inside the app. Free users can
              submit a request every 72 hours, Premium Supporters every 24 hours.
              Requests are reviewed regularly and fulfilled when possible.
            </p>
          </Q>

          <Q q="Can I watch with friends in different countries?">
            <p>
              Yes. iPartyUp works anywhere. Create a room, share the room code, and
              everyone joins in seconds. Our sync keeps the whole room on the same
              frame regardless of distance.
            </p>
          </Q>

          <Q q="Is there voice chat?">
            <p>
              Yes, in-room voice chat is built in. Tap into voice whenever you'd
              rather actually talk with the room instead of typing. It's optional
              — text chat, reactions, and emojis are always available too.
            </p>
          </Q>

          <Q q="How do I get updates?">
            <p>
              Updates are automatic. Once installed, iPartyUp checks for new
              versions and installs them quietly in the background. You'll always
              have the latest features, fixes, and content without lifting a finger.
            </p>
          </Q>

          <Q q="How do I report a bug or request a feature?">
            <p>
              Use the Reports & Feedback section inside the app — every message is
              read personally and typically gets a reply within about 24 hours.
            </p>
          </Q>
        </div>
      </div>
    </section>
  )
}
