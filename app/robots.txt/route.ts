export async function GET() {
  const robots = `User-agent: *
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: Google-adstxt
Allow: /
`;
  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
