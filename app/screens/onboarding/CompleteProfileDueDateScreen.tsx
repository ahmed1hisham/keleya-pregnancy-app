import React, { useCallback, useState } from "react";
import { MaterialInput } from "../../components/kit/MaterialInput";
import VerticalSpacer from "../../components/kit/VerticalSpacer";
import { Button, Text } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import { makeStyles } from "@rneui/themed";
import { Screen } from "../../components/kit/Screen";
import { View } from "react-native";
import { DatePicker } from "../../components/kit/DatePicker";
import { useDateFormat } from "../../hooks/use-date-format";
import FullWidthImage from "../../components/kit/FullWidthImage";
import { useRegistrationInfo } from "../../contexts/RegisterationContext";
import { useI18n } from "../../contexts/I18nContext";

const CompleteProfileNameScreen = () => {
  const navigation = useAppNavigation();

  const styles = useStyles();

  const { registerationInfo, setRegisterationInfoValue } =
    useRegistrationInfo();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: {
      dueDate: null,
    },
  });

  const { i18n } = useI18n();

  const [dueDateValue, setDueDateValue] = useState(getValues("dueDate"));
  const formattedDueDate = useDateFormat(dueDateValue, "short");

  const onSubmit = useCallback(
    async (formData: { name: string }) => {
      setRegisterationInfoValue(formData);
      navigation.navigate("CompleteProfileActivityLevel");
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
          localSource={require("../../assets/Images/due-date-background-image.jpg")}
        />
        <View style={styles.contentContainer}>
          <Text center h4>
            {i18n.t("when_is_your_baby_due", { name: registerationInfo.name })}
          </Text>
          <VerticalSpacer height={30} />
          <Controller
            name="dueDate"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched },
            }) => (
              <DatePicker
                date={value}
                onChange={(date) => {
                  setDueDateValue(date);
                  onChange(date);
                }}
                mode="date"
              >
                <MaterialInput
                  placeholder={i18n.t("due_date")}
                  value={formattedDueDate}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="default"
                  autoCapitalize="words"
                  autoCorrect={false}
                  errorMessage={
                    isTouched ? errors.dueDate?.message.toString() : ""
                  }
                  centerText
                  editable={false}
                />
              </DatePicker>
            )}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <VerticalSpacer />
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
}));

export default CompleteProfileNameScreen;
