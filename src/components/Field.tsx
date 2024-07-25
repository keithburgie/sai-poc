import React from "react";
import {
  UseFormRegister,
  FieldError,
  UseFormTrigger,
  UseFormClearErrors,
} from "react-hook-form";
import { Question as QuestionType } from "../types/survey";
import ErrorMessage from "./ErrorMessage";

type FormData = Record<string, any>;

interface FieldProps {
  question: QuestionType;
  register: UseFormRegister<FormData>;
  error?: FieldError;
  trigger: UseFormTrigger<FormData>;
  clearErrors: UseFormClearErrors<FormData>;
  touched: boolean;
  onTouch: (fieldName: string) => void;
}

const Field: React.FC<FieldProps> = ({
  question,
  register,
  error,
  trigger,
  clearErrors,
  touched,
  onTouch,
}) => {
  const { id, type, label, options, validation } = question;

  const handleBlur = () => {
    onTouch(id);
    trigger(id);
  };

  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (touched) {
      const isValid = await trigger(id);
      if (isValid) {
        clearErrors(id);
      }
    }
  };

  const renderInput = () => {
    const commonProps = {
      ...register(id, validation),
      onBlur: handleBlur,
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        register(id).onChange(e);
        handleChange(e);
      },
      className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
        error && touched ? "border-red-500" : ""
      }`,
    };

    switch (type) {
      case "text":
      case "email":
      case "number":
      case "date":
        return <input id={id} type={type} {...commonProps} />;
      case "textarea":
        return <textarea id={id} {...commonProps} />;
      case "radio":
        return (
          <div className="mt-2 space-y-2">
            {options?.map((option, index) => (
              <div key={`${id}-${index}`} className="flex items-center">
                <input
                  id={`${id}-${index}`}
                  type="radio"
                  value={option}
                  {...register(id, validation)}
                  onChange={(e) => {
                    register(id).onChange(e);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor={`${id}-${index}`}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div className="mt-2 space-y-2">
            {options?.map((option, index) => (
              <div key={`${id}-${index}`} className="flex items-center">
                <input
                  id={`${id}-${index}`}
                  type="checkbox"
                  value={option}
                  {...register(id, validation)}
                  onChange={(e) => {
                    register(id).onChange(e);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor={`${id}-${index}`}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {renderInput()}
      {touched && <ErrorMessage error={error} />}
    </div>
  );
};

export default Field;