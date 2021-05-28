/**
 * Copyright 2017-2021, Voxel51, Inc.
 */

import { CONTAINS, Overlay } from "./overlays/base";
import ClassificationsOverlay from "./overlays/classifications";
import { BaseState } from "./state";
import { getCanvasCoordinates, rotate } from "./util";

const processOverlays = <State extends BaseState>(
  context: CanvasRenderingContext2D,
  state: State,
  overlays: Overlay<State>[]
): [Overlay<State>[], number] => {
  const activeLabels = state.options.activeLabels;
  const bins = Object.fromEntries(activeLabels.map((l) => [l, []]));
  let classifications = null;

  for (const overlay of overlays) {
    if (overlay instanceof ClassificationsOverlay) {
      classifications = overlay;
      continue;
    }

    if (!(overlay.field in bins)) continue;

    if (!overlay.isShown(state)) continue;

    bins[overlay.field].push(overlay);
  }

  let ordered = activeLabels.reduce((acc, cur) => [...acc, ...bins[cur]], []);

  if (classifications) {
    ordered = [[classifications, ...ordered], state.rotate];
  }

  if (overlays.length < 1) {
    return [ordered, state.rotate];
  }

  if (state.config.thumbnail || !state.cursorCoordinates) {
    return [ordered, state.rotate];
  }

  const [x, y] = getCanvasCoordinates(
    state.cursorCoordinates,
    state.config.dimensions,
    context.canvas
  );

  let contained = ordered
    .filter((o) => o.containsPoint(context, state, [x, y]) > CONTAINS.NONE)
    .sort(
      (a, b) =>
        a.getMouseDistance(context, state, [x, y]) -
        b.getMouseDistance(context, state, [x, y])
    );
  const outside = ordered.filter(
    (o) =>
      o instanceof ClassificationsOverlay ||
      o.containsPoint(context, state, [x, y]) === CONTAINS.NONE
  );

  if (state.options.onlyShowHoveredLabel) {
    return contained.length ? contained[0] : [];
  }

  let newRotate = state.rotate;
  if (state.rotate !== 0) {
    [contained, newRotate] = rotate(contained, state.rotate);
  }

  return [[...contained, ...outside], newRotate];
};

export default processOverlays;