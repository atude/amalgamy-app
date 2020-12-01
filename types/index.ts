export type User = {
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  devices?: Device[];
  genres?: Genre[];
  accessibilityFeatures?: AccessibilityFeature[];
  friends?: User[];
  groups?: Group[];
  // bookmarkedGames: Game[];
};

export type Device =
  | "Windows Computer"
  | "Mac Computer"
  | "Linux Computer"
  | "PS4"
  | "PS5"
  | "Xbox One"
  | "Xbox Series X/S";

export type Genre =
  | "Adventure"
  | "RPG"
  | "example 1"
  | "example 2"
  | "example 3"
  | "etc";

export type AccessibilityFeature =
  | "Colourblind Support"
  | "Zoom Options"
  | "High Contrast Colour Scheme"
  | "Font Size Options"
  | "Subtitles"
  | "Direct Voice Input"
  | "Switch Controller Mode"
  | "Eye Tracker Mode";

export type Group = {
  name: string;
  avatar?: string;
  users: User[];
};

export type Game = {
  name: string;
  desc: string;
  icon: string;
  media?: string[];
  url?: {
    pc?: string;
    ios?: string;
    android?: string;
  };
  publisher: string;
  playersAmount?: {
    min?: number;
    max?: number;
  };
  devices: Device[];
  genres: string[];
  accessibilityFeatures: AccessibilityFeature[];
  rating?: number;
};
