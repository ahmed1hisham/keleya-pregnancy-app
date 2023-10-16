import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import InAppNavigation from "./InAppNavigation";
import AuthNavigation from "./AuthNavigation";
import { useAuthState } from "../contexts/AuthStateContext";

const AppNavigation = () => {
  const { isLoggedIn } = useAuthState();

  return (
    <NavigationContainer>
      {isLoggedIn ? <InAppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
