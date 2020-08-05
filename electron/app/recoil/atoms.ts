import randomColor from "randomcolor";
import { atom } from "recoil";

export const port = atom({
  key: "port",
  default: 5151,
});

export const stateDescription = atom({
  key: "stateDescription",
  default: {},
});

export const stageInfo = atom({
  key: "stageInfo",
  default: undefined,
});

export const colors = atom({
  key: "colors",
  default: randomColor({ count: 100, luminosity: "dark" }),
});
