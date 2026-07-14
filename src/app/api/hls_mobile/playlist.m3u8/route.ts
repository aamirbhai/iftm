export const dynamic = "force-dynamic";

export async function GET() {
  const body = [
    "#EXTM3U",
    "#EXT-X-VERSION:3",
    "#EXT-X-TARGETDURATION:10",
    "#EXT-X-MEDIA-SEQUENCE:0",
    "#EXTINF:9.933333,",
    "/api/hls-mobile-proxy?file=playlist0.ts",
    "#EXTINF:8.300000,",
    "/api/hls-mobile-proxy?file=playlist1.ts",
    "#EXTINF:3.166667,",
    "/api/hls-mobile-proxy?file=playlist2.ts",
    "#EXTINF:5.066667,",
    "/api/hls-mobile-proxy?file=playlist3.ts",
    "#EXTINF:5.633333,",
    "/api/hls-mobile-proxy?file=playlist4.ts",
    "#EXTINF:10.500000,",
    "/api/hls-mobile-proxy?file=playlist5.ts",
    "#EXTINF:2.800000,",
    "/api/hls-mobile-proxy?file=playlist6.ts",
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
