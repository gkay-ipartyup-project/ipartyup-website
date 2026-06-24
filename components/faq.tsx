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
              iPartyUp is a modern media center that gives you the freedom to
              watch everything you want.
            </p>
          </Q>
          <Q q="How does it work?">
            <p>
              Once you install iPartyUp on your device and create an account, all
              you have to do is to visit the addon catalog and install any addon
              you want, and you&apos;re good to go!
            </p>
            <p>
              After that, you can go to the Discover or Board sections to start
              exploring content.
            </p>
          </Q>
          <Q q="What can I watch here?">
            <p>
              A lot: Movies, TV shows, Web channels, Sport, TV channels, listen
              to Podcasts and more. Thanks to our addon system, you can access a
              variety of content.
            </p>
          </Q>
          <Q q="Is iPartyUp open-source?">
            <p>
              Yes, you can check the following links:{" "}
              <a href="#" className="text-stremio-green hover:underline">
                desktop app
              </a>{" "}
              and{" "}
              <a href="#" className="text-stremio-green hover:underline">
                GitHub organization
              </a>
              .
            </p>
          </Q>
          <Q q="Is iPartyUp safe?">
            <p>
              Yes: because it is open-source software, the code is publically
              auditable and you can review it yourself.
            </p>
            <p>
              iPartyUp&apos;s addon system was also created with the user&apos;s
              security in mind. The addons do not run any code locally, so they
              pose no risks to your device.
            </p>
          </Q>
          <Q q="How about my privacy?">
            <p>
              We respect users&apos; privacy and do not collect any personal data
              besides the essential minimum to create and sync your account.
            </p>
            <p>
              There is also a <strong className="font-semibold">Guest mode</strong>{" "}
              at signup, which requires no data whatsoever: in this mode, no
              calls are made to our backend. However, it comes at the expense of
              useful features, such as being able to sync your library across
              devices.
            </p>
          </Q>
          <Q q="Can I cast to my TV?">
            <p>
              Yes, we support Chromecast and you can cast both from desktop and
              mobile apps (Android).
            </p>
          </Q>
          <Q q="Can iPartyUp be extended beyond what's in the addon catalog?">
            <p>
              Yes, you should check those:{" "}
              <a href="#" className="text-stremio-green hover:underline">
                PimpMyStremio
              </a>
              ,{" "}
              <a href="#" className="text-stremio-green hover:underline">
                Reddit communities
              </a>
              ,{" "}
              <a href="#" className="text-stremio-green hover:underline">
                Stremio Downloader
              </a>
              , etc.
            </p>
          </Q>
          <Q q="What devices does iPartyUp support?">
            <p>
              We have desktop apps for Windows, Mac and Linux. We also have
              dedicated apps for Android Mobile and Android TV. For iOS and
              iPadOS we suggest using iPartyUp Web, although it is more limited in
              functionality.
            </p>
          </Q>
          <Q q="Can you add certain content to iPartyUp?">
            <p>
              Sorry, we provide no content ourselves, but the more iPartyUp addons
              you have installed, the more content you will be able to find.
            </p>
          </Q>
          <Q q="Can iPartyUp play magnet links?">
            <p>
              Yes, and it can also play normal HTTP links and torrent files (drag
              and drop).
            </p>
          </Q>
          <Q q="Can I download a video and watch offline?">
            <p>
              Available offline is an upcoming feature, but if you allow iPartyUp
              to cache on your device (from the settings panel) you can watch the
              videos later without a connection.
            </p>
          </Q>
          <Q q="Nothing works, help me!">
            <p>
              Are you sure you have installed addons? If yes, check with our{" "}
              <a href="#" className="text-stremio-green hover:underline">
                help center
              </a>
              .
            </p>
          </Q>
          <Q q="How does Stremio sustain its development operations?">
            <p>
              We run non-intrusive ads occasionally, but we&apos;re considering
              moving to a donation model.
            </p>
            <p>
              For more questions, go to our{" "}
              <a href="#" className="text-stremio-green hover:underline">
                help center
              </a>
              .
            </p>
          </Q>

        </div>
      </div>
    </section>
  )
}
