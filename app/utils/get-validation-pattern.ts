/**
 * Used with react-hook-form to validate input fields
 */
export const getValidationPattern = (type: "email" | "password") => {
  switch (type) {
    case "email":
      return {
        value: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: "Invalid email format",
      };

    case "password":
      return {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "Minimum eight characters, at least one letter and one number",
      };
  }
};
