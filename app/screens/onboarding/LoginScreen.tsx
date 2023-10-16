import React, { useCallback, useState } from "react";
import { MaterialInput } from "../../components/kit/MaterialInput";
import VerticalSpacer from "../../components/kit/VerticalSpacer";
import { Button, Text, useTheme } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import { makeStyles } from "@rneui/themed";
import { Screen } from "../../components/kit/Screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuthState } from "../../contexts/AuthStateContext";
import { Pressable, View } from "react-native";
import FullWidthImage from "../../components/kit/FullWidthImage";
import { useI18n } from "../../contexts/I18nContext";
import { getValidationPattern } from "../../utils/get-validation-pattern";

const LoginScreen = () => {
  const navigation = useAppNavigation();
  const { setIsLoggedIn } = useAuthState();
  const [showPassword, setShowPassword] = useState(false);
  const styles = useStyles();
  const {
    theme: { colors },
  } = useTheme();

  const { i18n } = useI18n();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (formData: { email: string; password: string }) => {
      console.log(formData);

      setIsLoggedIn(true);
    },
    [navigation]
  );

  return (
    <Screen
      scrollable
      isSafeArea
      safeEdges={["bottom"]}
      contentContainerStyle={styles.screenContentContainer}
    >
      <View>
        <FullWidthImage
          localSource={require("../../assets/Images/authentication-background-image.jpg")}
        />
        <Text center h3>
          {i18n.t("welcome_back")}
        </Text>
        <VerticalSpacer />
        <View style={styles.contentContainer}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
              pattern: getValidationPattern("email"),
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched },
            }) => (
              <MaterialInput
                placeholder={i18n.t("example_email")}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                errorMessage={isTouched ? errors.email?.message : ""}
              />
            )}
          />
          <VerticalSpacer />
          <Controller
            name="password"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
              pattern: getValidationPattern("password"),
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched },
            }) => (
              <MaterialInput
                secureTextEntry={!showPassword}
                placeholder={i18n.t("enter_a_password")}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                errorMessage={isTouched ? errors.password?.message : ""}
                rightIcon={
                  <Pressable
                    onPress={() => {
                      setShowPassword((old) => !old);
                    }}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={20}
                      color={colors.greyishBrown}
                    />
                  </Pressable>
                }
              />
            )}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <VerticalSpacer />
        <Button type="clear" size="sm">
          <Text>{i18n.t("have_you_forgotten_your_password")}</Text>
        </Button>
        <VerticalSpacer height={10} />
        <Button
          title={i18n.t("login")}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>
    </Screen>
  );
};
const useStyles = makeStyles(({ spacing }) => ({
  screenContentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  contentContainer: { paddingHorizontal: spacing["2xl"] },
}));

export default LoginScreen;
