import { StyleSheet } from "react-native";
import AppNavigation from "./app/navigation/AppNavigation";
import { AuthStateContextProvider } from "./app/contexts/AuthStateContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./app/theme/theme";
import Loader from "./app/components/kit/Loader";
import { ThemeProvider } from "@rneui/themed";
import { useLoadFonts } from "./app/hooks/use-load-fonts";
import { useI18n, useInitI18n } from "./app/hooks/use-i18n";
import { I18nContextProvider } from "./app/contexts/I18nContext";

const App = () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return <Loader />;

  return (
    <I18nContextProvider>
      <SafeAreaProvider>
        <AuthStateContextProvider>
          <AppNavigation />
        </AuthStateContextProvider>
      </SafeAreaProvider>
    </I18nContextProvider>
  );
};

const ThemedApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default ThemedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
