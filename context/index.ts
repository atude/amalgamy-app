import React from "react";
import { User } from "../types";
type AmalgamyContext = {
  check: "hello";
  authenticated: boolean;
  user: User;
};

export const defaultContext: AmalgamyContext = {
  authenticated: false,
  check: "hello",
  user: {
    email: "skdf",
    firstName: "Chloe",
    lastName: "Ladsa",
    devices: ["Windows Computer", "PS4"],
    genres: ["Action", "Casual"],
  },
};

export const AppContext = React.createContext(defaultContext);
