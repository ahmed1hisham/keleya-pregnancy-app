import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { RegisterationInfo } from "../types/auth.types";

const emptyRegisterationInfo = {
  email: "",
  password: "",
  privacyPolicyRead: false,
  termsAndConditionsAccept: false,
  name: "",
  dueDate: null,
  activityLevel: 0,
};

// This Context holds the information entered during registeration
export const RegisterationContext = React.createContext<{
  registerationInfo: RegisterationInfo;
  setRegisterationInfoValue: (object: Partial<RegisterationInfo>) => void;
}>({
  registerationInfo: emptyRegisterationInfo,
  setRegisterationInfoValue: () => {},
});

export const useRegistrationInfo = () => {
  return useContext(RegisterationContext);
};

export const RegistrationInfoContextProvider: FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  const [registerationInfo, setRegisterationInfo] = useState<RegisterationInfo>(
    emptyRegisterationInfo
  );

  const setRegisterationInfoValue = useCallback(
    (partialObject: Partial<RegisterationInfo>) => {
      setRegisterationInfo((old) => ({ ...old, ...partialObject }));
    },
    []
  );

  const value = useMemo(
    () => ({
      registerationInfo,
      setRegisterationInfoValue,
    }),
    [registerationInfo, setRegisterationInfoValue]
  );

  return (
    <RegisterationContext.Provider value={value}>
      {children}
    </RegisterationContext.Provider>
  );
};
