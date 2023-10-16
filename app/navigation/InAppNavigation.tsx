import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingSuccessScreen from "../screens/home/OnBoardingSuccessScreen";

const InAppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="OnBoardingSuccess"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="OnBoardingSuccess"
        component={OnBoardingSuccessScreen}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default InAppNavigation;
