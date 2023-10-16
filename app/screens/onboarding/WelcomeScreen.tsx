import React from "react";
import { Button, Image, Text, makeStyles } from "@rneui/themed";
import { Screen } from "../../components/kit/Screen";
import { ImageBackground, View } from "react-native";
import VerticalSpacer from "../../components/kit/VerticalSpacer";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import PaginationDots from "../../components/kit/PaginationDots";
import { useI18n } from "../../contexts/I18nContext";

const WelcomeScreen = () => {
  const styles = useStyles();
  const { i18n } = useI18n();
  const navigation = useAppNavigation();

  return (
    <ImageBackground
      source={require("../../assets/Images/first-intro-image.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <Screen
        isSafeArea
        contentContainerStyle={styles.screenContentContainer}
        safeAreaStyle={styles.safeAreaStyle}
      >
        <View style={styles.topContentContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/Images/keleya-logo.png")}
          />
          <VerticalSpacer height={10} />
          <Text center style={{ width: 200 }}>
            {i18n.t("for_a_fit_and_relaxed_pregnancy")}
          </Text>
        </View>
        <View style={styles.bottomContentContainer}>
          <Button
            title={i18n.t("get_started")}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
          <VerticalSpacer height={5} />
          <Button
            type="clear"
            title={i18n.t("or_login")}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <VerticalSpacer height={5} />
          <PaginationDots noOfDots={3} index={0} />
        </View>
      </Screen>
    </ImageBackground>
  );
};

const useStyles = makeStyles(({ spacing }) => ({
  screenContentContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: spacing["2xl"],
  },
  safeAreaStyle: { backgroundColor: "transparent" },
  imageBackground: { flex: 1, paddingHorizontal: spacing["2xl"] },
  topContentContainer: { alignItems: "center" },
  logo: { width: 100, height: 100, resizeMode: "contain" },
  bottomContentContainer: { width: "100%", alignItems: "center" },
}));

export default WelcomeScreen;
