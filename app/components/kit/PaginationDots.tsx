import { makeStyles } from "@rneui/themed";
import React, { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import HorizontalSpacer from "./HorizontalSpacer";

const PaginationDots = ({ noOfDots, index }) => {
  const styles = useStyles();

  const renderActiveDot = useCallback(
    (key) => {
      return <View key={key} style={styles.activeDotStyle} />;
    },
    [styles.activeDotStyle]
  );
  const renderDot = useCallback(
    (key) => {
      return <View key={key} style={styles.dotStyle} />;
    },
    [styles.dotStyle]
  );

  const renderDots = useMemo(() => {
    let dots = [];
    let key = 0;
    for (let i = 0; i < noOfDots; i++) {
      index === i
        ? dots.push(renderActiveDot(key++))
        : dots.push(renderDot(key++));

      i < noOfDots - 1 &&
        dots.push(<HorizontalSpacer key={"spacer" + i} width={5} />);
    }
    return dots;
  }, [index]);

  return <View style={styles.container}>{renderDots}</View>;
};

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dotStyle: {
    backgroundColor: colors.lightTeal,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  activeDotStyle: {
    backgroundColor: colors.paleTeal,
    width: 8,
    height: 8,
    borderRadius: 6,
  },
}));
export default memo(PaginationDots);
