/* eslint-disable camelcase */
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  return fontsLoaded;
};

export const fontWeights = {
  100: "Poppins_300Light",
  200: "Poppins_300Light",
  300: "Poppins_300Light",
  400: "Poppins_400Regular",
  normal: "Poppins_400Regular",
  500: "Poppins_500Medium",
  600: "Poppins_600SemiBold",
  700: "Poppins_700Bold",
  bold: "Poppins_700Bold",
  800: "Poppins_800ExtraBold",
  900: "Poppins_800ExtraBold",
};
