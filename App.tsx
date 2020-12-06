import React from "react";
import { AppContextProvider } from "./context";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppContextProvider>
        <SafeAreaProvider>
          <LoginScreen />
        </SafeAreaProvider>
      </AppContextProvider>
    );
  }
}
