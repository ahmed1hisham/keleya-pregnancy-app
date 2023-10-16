import { Button, Text, makeStyles, useTheme } from "@rneui/themed";
import React from "react";
import { View, ImageBackground } from "react-native";
import { Screen } from "../../components/kit/Screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import VerticalSpacer from "../../components/kit/VerticalSpacer";
import { useI18n } from "../../contexts/I18nContext";

const OnBoardingSuccessScreen = () => {
  const {
    theme: { colors },
  } = useTheme();
  const styles = useStyles();

  const { i18n } = useI18n();

  return (
    <Screen isSafeArea>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/Images/notifications-background-image.jpg")}
      >
        <View style={styles.topContentContainer}>
          <Ionicons
            name="notifications-outline"
            size={48}
            color={colors.greyishBrown}
          />
          <VerticalSpacer height={20} />
          <Text center h4>
            {i18n.t("get_notifications_to_boost_your_motivation")}
          </Text>
        </View>
        <View style={styles.bottomContentContainer}>
          <Button type="clear" size="sm">
            <Text>{i18n.t("skip")}</Text>
          </Button>
          <VerticalSpacer />
          <Button title={i18n.t("allow_notifications")} />
        </View>
      </ImageBackground>
    </Screen>
  );
};

const useStyles = makeStyles(({ colors, spacing }) => ({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  topContentContainer: {
    alignItems: "center",
    paddingHorizontal: spacing["2xl"],
    paddingTop: spacing.lg,
  },
  bottomContentContainer: {
    alignItems: "center",
    paddingHorizontal: spacing["2xl"],
  },
}));

export default OnBoardingSuccessScreen;
