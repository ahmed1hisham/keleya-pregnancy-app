import React, {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { AuthState } from "../types/auth.types";

export const AuthStateContext = React.createContext<AuthState>({});

export const useAuthState = () => {
  return useContext(AuthStateContext);
};

// This Context Provider helps with managing the UI for authenticated vs non authenticated users
export const AuthStateContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const value = useMemo(
    () =>
      ({ isLoggedIn, setIsLoggedIn, isLoggingIn, setIsLoggingIn } as AuthState),
    [isLoggedIn, setIsLoggedIn, isLoggingIn, setIsLoggingIn]
  );

  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
};
