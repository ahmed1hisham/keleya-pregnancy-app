import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import { RegistrationInfoContextProvider } from "../contexts/RegisterationContext";
import LoginScreen from "../screens/onboarding/LoginScreen";
import SignUpScreen from "../screens/onboarding/SignUpScreen";
import { HeaderBackButton } from "../components/kit/HeaderBackButton";
import CompleteProfileNameScreen from "../screens/onboarding/CompleteProfileNameScreen";
import CompleteProfileDueDateScreen from "../screens/onboarding/CompleteProfileDueDateScreen";
import CompleteProfileActivityLevelScreen from "../screens/onboarding/CompleteProfileActivityLevelScreen";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <RegistrationInfoContextProvider>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          title: "",
          headerBackTitleVisible: false,
          headerLeft: () => <HeaderBackButton />,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="CompleteProfileName"
          component={CompleteProfileNameScreen}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="CompleteProfileDueDate"
          component={CompleteProfileDueDateScreen}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="CompleteProfileActivityLevel"
          component={CompleteProfileActivityLevelScreen}
          options={{ headerTransparent: true }}
        />
      </Stack.Navigator>
    </RegistrationInfoContextProvider>
  );
};

export default AuthNavigation;
