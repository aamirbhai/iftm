import { NextResponse } from "next/server";

export async function GET() {
  const playlist = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:9.933333,
https://4.lfabhawalpur.com/hls_mobile/playlist0.ts
#EXTINF:8.300000,
https://4.lfabhawalpur.com/hls_mobile/playlist1.ts
#EXTINF:3.166667,
https://4.lfabhawalpur.com/hls_mobile/playlist2.ts
#EXTINF:5.066667,
https://4.lfabhawalpur.com/hls_mobile/playlist3.ts
#EXTINF:5.633333,
https://4.lfabhawalpur.com/hls_mobile/playlist4.ts
#EXTINF:10.500000,
https://4.lfabhawalpur.com/hls_mobile/playlist5.ts
#EXTINF:2.800000,
https://4.lfabhawalpur.com/hls_mobile/playlist6.ts
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
