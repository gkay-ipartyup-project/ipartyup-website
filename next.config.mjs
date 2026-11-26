/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/features',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/downloads',
        destination: '/download',
        permanent: true,
      },
      {
        source: '/changelog',
        destination: '/updates',
        permanent: true,
      },
      {
        source: '/release-notes',
        destination: '/updates',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    const noindexHeader = [
      {
        key: 'X-Robots-Tag',
        value: 'noindex, nofollow',
      },
    ]

    return [
      {
        source: '/auth/:path*',
        headers: noindexHeader,
      },
      {
        source: '/patreon/:path*',
        headers: noindexHeader,
      },
      {
        source: '/watch-ad.html',
        headers: noindexHeader,
      },
      {
        source: '/watch-ad-mobile.html',
        headers: noindexHeader,
      },
      {
        source: '/ad-160x600.html',
        headers: noindexHeader,
      },
      {
        source: '/ad-728x90.html',
        headers: noindexHeader,
      },
    ]
  },
}

export default nextConfig
