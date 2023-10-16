import { FunctionComponent, PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Edge,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { makeStyles, useTheme } from "@rneui/themed";

interface ScreenProps {
  scrollable?: boolean;
  isSafeArea?: boolean;
  safeEdges?: Edge[];
  contentContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  safeAreaStyle?: ViewStyle;
}

interface ConditionalSafeAreaProps {
  children: any;
  isSafeArea?: boolean;
  edges?: Edge[];
  safeAreaStyle?: Object;
}

const ConditionalSafeAreaView: FunctionComponent<ConditionalSafeAreaProps> = ({
  children,
  isSafeArea = false,
  edges = ["top", "right", "left", "bottom"],
  safeAreaStyle,
}) => {
  const styles = useStyles();
  return isSafeArea ? (
    <SafeAreaView style={[styles.safeArea, safeAreaStyle]} edges={edges}>
      {children}
    </SafeAreaView>
  ) : (
    children
  );
};

export const Screen: FunctionComponent<PropsWithChildren<ScreenProps>> = ({
  children,
  scrollable,
  isSafeArea,
  safeEdges,
  contentContainerStyle = {},
  containerStyle = {},
  safeAreaStyle = {},
}) => {
  const styles = useStyles();
  const insets = useSafeAreaInsets();
  const {
    theme: { spacing },
  } = useTheme();

  return (
    <ConditionalSafeAreaView
      isSafeArea={isSafeArea}
      edges={safeEdges}
      safeAreaStyle={safeAreaStyle}
    >
      {scrollable ? (
        <KeyboardAwareScrollView
          style={[
            styles.content,
            // Checking if there's no bottom inset, to add necessary padding
            insets.bottom === 0 && { paddingBottom: spacing.md },
            containerStyle,
          ]}
          contentContainerStyle={contentContainerStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          extraScrollHeight={50}
        >
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <View
          style={[
            styles.content,
            // Checking if there's no bottom inset, to add necessary padding
            insets.bottom === 0 && { paddingBottom: spacing.md },
            contentContainerStyle,
          ]}
        >
          {children}
        </View>
      )}
    </ConditionalSafeAreaView>
  );
};

const useStyles = makeStyles(({ colors, spacing }) => ({
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
}));
