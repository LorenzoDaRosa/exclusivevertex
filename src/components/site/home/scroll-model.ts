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

/** Hold the opening for 20%, reveal until 75%, then hold the second statement. */
export function circleReveal(progress: number) {
  return clamp((progress - 0.2) / 0.55);
}

export function circleRadius(progress: number, width: number, height: number) {
  return circleReveal(progress) * Math.hypot(width / 2, height / 2);
}