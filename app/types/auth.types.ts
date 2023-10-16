import { Dispatch, SetStateAction } from "react";

export type AuthState = {
  isLoggedIn?: boolean;
  setIsLoggedIn?: Dispatch<SetStateAction<boolean>>;
  isLoggingIn?: boolean;
  setIsLoggingIn?: Dispatch<SetStateAction<boolean>>;
};

export type RegisterationInfo = {
  email: string;
  password: string;
  privacyPolicyRead: boolean;
  termsAndConditionsAccept: boolean;
  name: string;
  dueDate: Date;
  activityLevel: number;
};
