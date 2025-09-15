export const copyToClipboard = async (text) => {
  if (!text) return false;

  // Moderne API (nur in secure contexts)
  if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) { /* weiter zum Fallback */ }
  }

  // Fallback über verstecktes Textarea (funktioniert in vielen Umgebungen, auch älteren Safari/iOS WebViews)
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (_) {
    return false;
  }
};
