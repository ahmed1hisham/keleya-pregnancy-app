import React, { useCallback } from "react";
import { Button, Text } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import { makeStyles } from "@rneui/themed";
import { Screen } from "../../components/kit/Screen";
import { ImageBackground, View, useWindowDimensions } from "react-native";
import { useImageAspectRatioAndSize } from "../../hooks/use-image-aspect-ratio-and-size";
import { useHeaderHeight } from "@react-navigation/elements";
import { Picker } from "@react-native-picker/picker";
import { useRegistrationInfo } from "../../contexts/RegisterationContext";
import { useAuthState } from "../../contexts/AuthStateContext";
import { useI18n } from "../../contexts/I18nContext";
const backgroundImage = require("../../assets/Images/workout-goal-background-image.jpg");

const CompleteProfileActivityLevelScreen = () => {
  const navigation = useAppNavigation();

  const { width } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const { setIsLoggedIn } = useAuthState();
  const { aspectRatio } = useImageAspectRatioAndSize({
    localSource: backgroundImage,
  });
  const styles = useStyles();

  const { i18n } = useI18n();

  const { setRegisterationInfoValue, registerationInfo } =
    useRegistrationInfo();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      activityLevel: 3,
    },
  });

  const onSubmit = useCallback(
    async (formData: { name: string }) => {
      setRegisterationInfoValue(formData);
      setIsLoggedIn(true);
    },
    [navigation]
  );

  const renderPickerItems = useCallback(() => {
    let pickerItems = [
      <Picker.Item key={1} label={i18n.t("once_a_week")} value={1} />,
    ];
    for (let i = 2; i <= 20; i++) {
      pickerItems.push(
        <Picker.Item
          key={i}
          label={`${i} ${i18n.t("times_a_week")}`}
          value={i}
        />
      );
    }
    return pickerItems;
  }, []);

  return (
    <Screen
      scrollable
      isSafeArea
      safeEdges={["bottom"]}
      contentContainerStyle={styles.screenContentContainer}
    >
      <View>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={[
            {
              width: width,
              height: aspectRatio ? width / aspectRatio : 0,
              paddingTop: headerHeight,
            },
            styles.contentContainer,
          ]}
        >
          <Text center h4>
            {i18n.t("how_many_times_a_week_do_you_want_to_be_active")}
          </Text>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <Controller
            name="activityLevel"
            control={control}
            rules={{
              required: i18n.t("this_field_is_required"),
            }}
            render={({ field: { onChange, value } }) => (
              <Picker
                itemStyle={styles.pickerItem}
                selectedValue={value}
                onValueChange={onChange}
              >
                {renderPickerItems()}
              </Picker>
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
  pickerItem: {
    height: 150,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    paddingVertical: 20,
  },
}));

export default CompleteProfileActivityLevelScreen;
