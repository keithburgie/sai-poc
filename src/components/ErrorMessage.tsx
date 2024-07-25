import React from "react";
import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error?: FieldError;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return <p className="mt-1 text-red-600 text-sm">{error.message}</p>;
};

export default ErrorMessage;
