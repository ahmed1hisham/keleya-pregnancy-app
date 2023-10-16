import React, {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { I18n } from "i18n-js";
import * as Localization from "expo-localization";
import en from "../utils/I18n/locales/en";
import de from "../utils/I18n/locales/de";

export const I18nContext = React.createContext<{
  i18n?: I18n;
}>({});

export const useI18n = () => {
  return useContext(I18nContext);
};

export const I18nContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const translations = {
    en: en,
    de: de,
  };
  const i18n = new I18n(translations);

  i18n.locale = Localization.getLocales()[0]?.languageCode;
  i18n.enableFallback = true;
  i18n.defaultLocale = "en";

  const value = useMemo(() => ({ i18n }), [i18n]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
