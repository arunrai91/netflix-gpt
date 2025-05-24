export const checkFormData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  if (!isEmailValid) {
    return "Email ID is not valid."; // Return an error message if email is invalid
  }

  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"|,.<>/?]).{8,}$/.test(
      password
    );

  if (!isPasswordValid) {
    return "Password is not valid. It must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.";
  }
  return null;
};
