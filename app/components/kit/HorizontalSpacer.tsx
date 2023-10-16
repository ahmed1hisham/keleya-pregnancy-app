import React, { FunctionComponent, memo } from "react";
import { View } from "react-native";

const HorizontalSpacer: FunctionComponent<{ width: number }> = ({ width }) => {
  return <View style={{ width: width ?? 15 }} />;
};

export default memo(HorizontalSpacer);
