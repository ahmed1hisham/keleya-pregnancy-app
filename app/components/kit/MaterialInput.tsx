import React, { ReactElement } from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { Text, makeStyles, useTheme } from "@rneui/themed";
import VerticalSpacer from "./VerticalSpacer";

export const MaterialInput = (
  props: TextInputProps & {
    errorMessage?: string;
    rightIcon?: ReactElement;
    leftIcon?: ReactElement;
    hint?: string;
    topLabel?: string;
    centerText?: boolean;
  }
) => {
  const styles = useStyles();
  const {
    theme: { colors },
  } = useTheme();

  return (
    <>
      {props.topLabel && (
        <Text style={styles.labelStyle}>{props.topLabel}</Text>
      )}
      <VerticalSpacer height={10} />
      <TextInput
        style={[
          styles.inputStyle,
          props.style ? props.style : null,
          props.multiline
            ? {
                height: 90,
              }
            : null,
          props.centerText && { textAlign: "center" },
        ]}
        label={props.topLabel ? null : props.label}
        contentStyle={{
          fontFamily: "Poppins_400Regular",
          fontSize: 16,
        }}
        placeholderTextColor={colors.warmGrey}
        activeOutlineColor={colors.paleTeal}
        outlineColor={"transparent"}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType ? props.keyboardType : "email-address"}
        returnKeyType="done"
        autoComplete={"off"}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        theme={{
          roundness: 10,
          colors: {
            placeholder: colors.warmGrey,
            text: colors.greyishBrown,
            primary: colors.paleTeal,
          },
        }}
        right={
          props.rightIcon ? (
            <TextInput.Icon icon={() => props.rightIcon} />
          ) : null
        }
        left={
          props.leftIcon ? <TextInput.Icon icon={() => props.leftIcon} /> : null
        }
        {...props}
      />
      {props.errorMessage && (
        <Text style={{ fontSize: 14, color: colors.error }}>
          {props.errorMessage}
        </Text>
      )}
    </>
  );
};

const useStyles = makeStyles(({ colors }) => ({
  inputStyle: {
    width: "100%",
    height: 46,
    backgroundColor: "transparent",
    borderRadius: 10,
    fontFamily: "Poppins_400Regular",
    paddingVertical: 0,
    justifyContent: "center",
  },
  hintStyle: {
    fontSize: 14,
    alignSelf: "flex-end",
    marginTop: 5,
  },
  labelStyle: {
    color: colors.greyishBrown,
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    alignSelf: "flex-start",
  },
}));
