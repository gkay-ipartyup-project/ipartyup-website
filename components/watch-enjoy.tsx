import Image from "next/image"

export function WatchEnjoy({ variant = "dark" }: { variant?: "dark" | "green" }) {
  const isGreen = variant === "green"

  return (
    <section
      className={
        isGreen
          ? "relative overflow-hidden bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] pt-28 pb-20 lg:pt-36 lg:pb-28 -mt-24 z-10 text-white"
          : "bg-stremio-dark pt-20 pb-52 lg:pt-28 lg:pb-68 text-white"
      }
    >
      <div
        className={`mx-auto max-w-[1320px] px-6 ${
          isGreen ? "[transform:skewY(4deg)]" : ""
        }`}
      >
        <div className="text-center">
          <h2 className={`text-4xl font-bold ${isGreen ? "text-white" : "text-stremio-green"}`}>
            Watch &amp; Enjoy.
          </h2>
          <h3 className={`mt-4 text-2xl font-bold ${isGreen ? "text-white/95" : "text-white"}`}>
            iPartyUp makes it a piece of cake
          </h3>
          <a
            href="#"
            className={`mt-6 inline-block text-base font-medium ${
              isGreen ? "text-white hover:text-white/80" : "text-stremio-green"
            } hover:underline`}
          >
            All features &gt;
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* phone mockup */}
          <div className="flex justify-center md:justify-end md:pr-10">
            <div className="relative w-[270px] h-[550px]">
              {/* Screen Content inside Bezel */}
              <div className="absolute inset-[10px] rounded-[2rem] overflow-hidden bg-neutral-900">
                <video
                  src="/app-video.mp4"
                  className="absolute top-1/2 left-1/2 w-[105%] h-[105%] -translate-x-1/2 -translate-y-1/2 object-cover border-0 pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              {/* Smartphone Bezel Image Overlay */}
              <Image
                src="/smartphone-bezel.png"
                alt=""
                width={540}
                height={1100}
                className="absolute inset-0 z-10 w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white">Easy to Use</h2>
            <p className={`mt-4 text-lg leading-relaxed ${isGreen ? "text-white/90" : "text-neutral-400"}`}>
              iPartyUp is designed to be user-friendly and easy to use. With its
              clean and intuitive interface you can easily navigate and find the
              content you want to watch.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-white">
              Seamless Across Devices
            </h2>
            <p className={`mt-4 text-lg leading-relaxed ${isGreen ? "text-white/90" : "text-neutral-400"}`}>
              Available for a wide range of platforms (incl. Windows, Mac, Linux,
              Android and more), iPartyUp will keep track of your progress across
              all your devices. Just login and continue watching without having
              to configure the app again on each new device.
            </p>

            <a
              href="#"
              className={`mt-8 inline-flex items-center rounded-full border-[3px] border-white px-8 py-3 text-base font-semibold text-white transition-colors ${
                isGreen
                  ? "hover:bg-white hover:text-stremio-green"
                  : "hover:bg-white hover:text-stremio-dark"
              }`}
            >
              All Downloads
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
