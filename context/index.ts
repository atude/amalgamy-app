import React from "react";

type AmalgamyContext = {
  check: "hello";
  authenticated: boolean;
};

export const defaultContext: AmalgamyContext = {
  authenticated: false,
  check: "hello",
};

export const AppContext = React.createContext(defaultContext);
