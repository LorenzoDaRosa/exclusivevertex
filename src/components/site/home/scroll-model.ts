export function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

/** V8: the same scroll coordinate determines the step in either direction. */
export function sceneIndex(distance: number, step: number, count: number) {
  if (count <= 0 || step <= 0) return 0;
  return Math.max(0, Math.min(count - 1, Math.floor((distance + step * 0.18) / step)));
}

export function sceneStep(width: number) {
  return width <= 680 ? 122 : 182;
}

export function sceneTravel(step: number, count: number) {
  return step * (count - 0.45);
}