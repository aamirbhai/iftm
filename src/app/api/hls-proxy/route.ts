export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const file = url.searchParams.get("file");

  if (!file || !file.match(/^playlist\d+\.ts$/)) {
    return new Response("Invalid file", { status: 400 });
  }

  const cdnUrl = `https://4.lfabhawalpur.com/hls/${file}`;

  try {
    const resp = await fetch(cdnUrl);
    if (!resp.ok) {
      return new Response("Not found", { status: 404 });
    }

    const headers = new Headers();
    headers.set("Content-Type", "video/MP2T");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "public, max-age=86400");

    return new Response(resp.body, { status: 200, headers });
  } catch {
    return new Response("Fetch failed", { status: 502 });
  }
}
