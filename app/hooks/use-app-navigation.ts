import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// For use throughout your app instead of plain `useNavigation`
export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<any>>();
