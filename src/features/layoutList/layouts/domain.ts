import { ReactNode } from "react";

export type LayoutType = "none" | "general" | "top" | "monthly" | "sentence";

export type LayoutItemProps = {
  name: string;
  system: string;
  icon: ReactNode;
  type: LayoutType;
};

export type LayoutData = {
  brightness?: number;
  contrast?: number;
  saturation?: number;
  blur?: number;
  isInvert?: boolean;
  showScore?: boolean;

  gameName?: string;
  score?: number;
  numPlayers?: string;
  time?: string;
  minAge?: string;

  prompt?: string;
};

const layoutDataDefault: LayoutData = {
  gameName: "Juernes de Mesa",
  isInvert: false,
  showScore: false,
  time: "30' - 45'",
  numPlayers: "1 - 4",
  minAge: "12+",
  score: 5,
  brightness: 1,
  contrast: 1.05,
  saturation: 1.3,
};

export { layoutDataDefault };
