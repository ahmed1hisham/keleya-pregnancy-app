import { FunctionComponent } from "react";
import { useTheme } from "@rneui/themed";
import { Pressable } from "react-native";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import Entypoicon from "@expo/vector-icons/Entypo";

// Replaces the navigation back button with either a back or a close icon
// Separate component for more control over UI
// and for managing the navigation.goBack situations in more complicated stacks with deeplinking
export const HeaderBackButton: FunctionComponent<{
  isClose?: boolean;
}> = () => {
  const {
    theme: { colors },
  } = useTheme();
  const navigation = useAppNavigation();

  return (
    <Pressable
      style={{ padding: 10 }}
      onPress={navigation.goBack}
      hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
    >
      {<Entypoicon name={"arrow-left"} size={20} color={colors.greyishBrown} />}
    </Pressable>
  );
};
