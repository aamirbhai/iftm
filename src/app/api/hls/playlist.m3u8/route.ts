import { NextResponse } from "next/server";

export async function GET() {
  const playlist = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:6
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist0.ts
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist1.ts
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist2.ts
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist3.ts
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist4.ts
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist5.ts
#EXTINF:6.000000,
https://4.lfabhawalpur.com/hls/playlist6.ts
#EXTINF:3.400000,
https://4.lfabhawalpur.com/hls/playlist7.ts
#EXT-X-ENDLIST
`;

  return new NextResponse(playlist, {
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
