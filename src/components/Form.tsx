import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useClientConfig } from "../hooks/useClientConfig";
import Field from "./Field";
import { Question as QuestionType } from "../types/survey";

export type FormData = {
  [key: string]: string | string[];
};

interface FormProps {
  onSubmit: SubmitHandler<FormData>;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    clearErrors,
  } = useForm<FormData>();

  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const { getQuestions } = useClientConfig();

  const questions = getQuestions();

  const handleFieldTouch = (fieldName: string) => {
    setTouchedFields((prev) => new Set(prev).add(fieldName));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {questions.map((question: QuestionType) => (
        <Field
          key={question.id}
          question={question}
          register={register}
          error={errors[question.id]}
          trigger={trigger}
          clearErrors={clearErrors}
          touched={touchedFields.has(question.id)}
          onTouch={handleFieldTouch}
        />
      ))}
      <button
        type="submit"
        className="bg-primary hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
