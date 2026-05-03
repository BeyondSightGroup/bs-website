// Tiny wrapper so consumers can `await loadAnime()` without re-doing the
// dynamic-import + default-unwrap dance. anime.js is shipped as a single
// chunk that the browser caches after the first call.
export async function loadAnime() {
  const mod: any = await import("animejs");
  const anime = mod.default ?? mod;
  // Keep animations ticking in headless / hidden contexts (preview, prerender).
  // Real browsers throttle rAF when hidden anyway, so the perf cost is near zero.
  anime.suspendWhenDocumentHidden = false;
  return anime;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
