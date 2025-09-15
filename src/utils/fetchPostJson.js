export async function doFetch(
  url,
  { body = null, headers = null, as = "json" } = {},
) {
  const opts = { method: "POST", body, redirect: "follow" };
  if (headers) opts.headers = headers;
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return as === "text" ? res.text() : res.json();
}
