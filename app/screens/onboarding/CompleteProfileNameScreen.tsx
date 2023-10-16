import React, { useCallback } from "react";
import { MaterialInput } from "../../components/kit/MaterialInput";
import VerticalSpacer from "../../components/kit/VerticalSpacer";
import { Button, Image, Text } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import { makeStyles } from "@rneui/themed";
import { Screen } from "../../components/kit/Screen";
import { View, useWindowDimensions } from "react-native";
import { useRegistrationInfo } from "../../contexts/RegisterationContext";
import { useI18n } from "../../contexts/I18nContext";

const CompleteProfileNameScreen = () => {
  const navigation = useAppNavigation();
  const { setRegisterationInfoValue } = useRegistrationInfo();

  const { height } = useWindowDimensions();
  const styles = useStyles();

  const { i18n } = useI18n();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = useCallback(
    async (formData: { name: string }) => {
      setRegisterationInfoValue(formData);
      navigation.navigate("CompleteProfileDueDate");
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
        <Image
          source={require("../../assets/Images/couch_smile.jpg")}
          style={[styles.imageStyle, { height: 0.5 * height }]}
        />
        <VerticalSpacer />
        <View style={styles.contentContainer}>
          <Text center h4>
            {i18n.t("its_great_that_you")}
          </Text>
          <VerticalSpacer />
          <Controller
            name="name"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched },
            }) => (
              <MaterialInput
                placeholder={i18n.t("your_name")}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect={false}
                errorMessage={isTouched ? errors.name?.message : ""}
                centerText
              />
            )}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Button
          title={i18n.t("continue")}
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
  imageStyle: {
    width: "100%",
    resizeMode: "cover",
  },
}));

export default CompleteProfileNameScreen;
