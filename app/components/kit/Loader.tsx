import { useTheme } from "@rneui/themed";
import React, { memo } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loader = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.paleTeal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(Loader);
