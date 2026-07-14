export const dynamic = "force-dynamic";

export async function GET() {
  const body = [
    "#EXTM3U",
    "#EXT-X-VERSION:3",
    "#EXT-X-TARGETDURATION:6",
    "#EXT-X-MEDIA-SEQUENCE:0",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist0.ts",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist1.ts",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist2.ts",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist3.ts",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist4.ts",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist5.ts",
    "#EXTINF:6.000000,",
    "/api/hls-proxy?file=playlist6.ts",
    "#EXTINF:3.400000,",
    "/api/hls-proxy?file=playlist7.ts",
    "#EXT-X-ENDLIST",
    "",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=60",
    },
  });
}
