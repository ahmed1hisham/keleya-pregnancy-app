import React, { useCallback, useState } from "react";
import { MaterialInput } from "../../components/kit/MaterialInput";
import VerticalSpacer from "../../components/kit/VerticalSpacer";
import { Button, CheckBox, Text, useTheme } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import { makeStyles } from "@rneui/themed";
import { Screen } from "../../components/kit/Screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, View } from "react-native";
import FullWidthImage from "../../components/kit/FullWidthImage";
import { useRegistrationInfo } from "../../contexts/RegisterationContext";
import { getValidationPattern } from "../../utils/get-validation-pattern";
import { useI18n } from "../../contexts/I18nContext";

const SignUpScreen = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const { setRegisterationInfoValue } = useRegistrationInfo();
  const [showPassword, setShowPassword] = useState(false);

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
      privacyPolicyRead: false,
      termsAndConditionsAccept: false,
    },
  });

  const onSubmit = useCallback(
    async (formData: { email: string; password: string }) => {
      setRegisterationInfoValue(formData);
      navigation.navigate("CompleteProfileName");
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

        <View style={styles.subContentContainer}>
          <Text center h3>
            {i18n.t("add_your_details")}
          </Text>
          <VerticalSpacer />
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
          <VerticalSpacer />
          <Controller
            name="privacyPolicyRead"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
              validate: (value) => value === true,
            }}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                containerStyle={styles.checkBoxContainer}
                title={
                  <Text style={{ fontSize: 14 }}>
                    {i18n.t("ive_read_the") + " "}
                    <Text style={{ fontSize: 14 }} weight="600">
                      {i18n.t("privacy_policy")}
                    </Text>
                  </Text>
                }
                checkedIcon="check-square-o"
                uncheckedIcon="square-o"
                checkedColor={colors.paleTeal}
                checked={value}
                onPress={() => onChange(!value)}
              />
            )}
          />
          <VerticalSpacer />
          <Controller
            name="termsAndConditionsAccept"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
              validate: (value) => value === true,
            }}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                containerStyle={styles.checkBoxContainer}
                wrapperStyle={{
                  alignItems: "flex-start",
                }}
                title={
                  <Text style={{ fontSize: 14 }}>
                    {i18n.t("i_accept_the") + " "}
                    <Text style={{ fontSize: 14 }} weight="600">
                      {i18n.t("terms_and_conditions")}
                    </Text>
                    {" & "}
                    <Text style={{ fontSize: 14 }} weight="600">
                      {i18n.t("keleyas_advice")}
                    </Text>
                  </Text>
                }
                checkedIcon="check-square-o"
                uncheckedIcon="square-o"
                checkedColor={colors.paleTeal}
                checked={value}
                onPress={() => onChange(!value)}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.subContentContainer}>
        <VerticalSpacer />
        <Button
          title={i18n.t("create_account")}
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
  subContentContainer: { width: "100%", paddingHorizontal: spacing["2xl"] },
  checkBoxContainer: {
    padding: 0,
    margin: 0,
  },
}));

export default SignUpScreen;
