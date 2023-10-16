import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import { makeStyles, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// A universal Date picking component that could wrap any desired UI
export interface DatePickerProps {
  date: Date;
  min?: Date;
  max?: Date;
  mode?: "date" | "time" | "datetime";
  onChange: (date?: Date) => void;
  onCancel?: () => void;
  disabled?: boolean;
}

export const DatePicker: FunctionComponent<
  PropsWithChildren<DatePickerProps>
> = ({ date, min, max, mode, onChange, onCancel, children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <DateTimePickerModal
        date={date ?? new Date()}
        isVisible={show}
        mode={mode ?? "date"}
        onConfirm={(date) => {
          setShow(false);
          onChange(date);
        }}
        onCancel={() => {
          setShow(false);
          onCancel?.();
        }}
        minimumDate={min}
        maximumDate={max}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setShow(true);
        }}
      >
        <View pointerEvents="none">{children}</View>
      </TouchableOpacity>
    </>
  );
};
