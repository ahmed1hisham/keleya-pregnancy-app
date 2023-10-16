import { createTheme, useTheme } from "@rneui/themed";
import colors, { Colors as ThemeColors } from "./colors";
import { useEffect, useState } from "react";
import { fontWeights } from "../hooks/use-load-fonts";
import { TextStyle } from "react-native";

declare module "@rneui/themed" {
  export interface Colors extends ThemeColors {}
  export interface ThemeSpacing {
    "2xl": number;
    "3xl": number;
    "4xl": number;
  }
  export interface TextProps {
    weight?: TextStyle["fontWeight"];
    center?: boolean;
  }
}

export const theme = createTheme({
  lightColors: { ...colors },
  spacing: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
    "2xl": 30,
    "3xl": 40,
    "4xl": 50,
  },
  components: {
    Button: ({ type = "solid", size = "md" }) => {
      const borderRadius = 4;
      let textColor = type === "solid" ? colors.white : colors.greyishBrown;

      const height = {
        sm: 42,
        md: 52,
        lg: 62,
      }[size];

      return {
        style: { width: "100%" },
        borderRadius,
        buttonStyle: {
          height,
          borderRadius,
          paddingVertical: 0,
          backgroundColor: type === "solid" ? colors.paleTeal : "transparent",
        },
        containerStyle: { width: "100%" },
        titleStyle: {
          fontSize: 18,
          color: textColor,
          fontFamily: "Poppins_500Medium",
        },
        loadingProps: {
          color: textColor,
        },
        disabledStyle: {
          backgroundColor: colors.warmGrey,
        },
        disabledTitleStyle: {
          color: colors.white,
        },
      };
    },
    Text: ({ weight, center }) => ({
      style: {
        fontSize: 16,
        color: colors.greyishBrown,
        fontFamily: weight ? fontWeights[weight] : "Poppins_400Regular",
        textAlign: center ? "center" : "left",
      },
      h3Style: { fontSize: 24 },
      h4Style: { fontSize: 20 },
    }),
  },
  mode: "light",
});
