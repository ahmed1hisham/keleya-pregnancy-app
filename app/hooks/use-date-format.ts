import { useMemo } from "react";
import { format as formatDate } from "date-fns";

// A hook that uses date-fns library formatter to return various date formats
const formats = {
  12: {
    time: "h:mm a",
    short: "d MMMM, yyyy",
    long: "eeee, d MMM h:mm a",
    shortAt: "d MMMM 'at' h:mm a",
    longAt: "eeee, d MMMM y 'at' h:mm a",
    day_month_year: "dd/MM/yyyy",
    month_day_year: "MMM d, yyyy",
  },
  24: {
    time: "HH:mm",
    short: "d MMMM, yyyy",
    long: "eeee, d MMM HH:mm",
    shortAt: "d MMMM 'at' HH:mm",
    longAt: "eeee, d MMMM y 'at' HH:mm",
    day_month_year: "dd/MM/yyyy",
    month_day_year: "MMM d, yyyy",
  },
};

export const useDateFormat = (date, format) => {
  const userDateFormat = "12";

  return useMemo(() => {
    if (!date) {
      return undefined;
    }
    return formatDate(new Date(date), formats[userDateFormat][format]);
  }, [date, format, userDateFormat]);
};
