import React, { FunctionComponent, memo } from "react";
import { View } from "react-native";

const VerticalSpacer: FunctionComponent<{ height?: number }> = ({
  height = 15,
}) => {
  return <View style={{ height }} />;
};

export default memo(VerticalSpacer);
