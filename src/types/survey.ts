export type PredefinedQuestionId = 
  | "name"
  | "email"
  | "ssn"
  | "dateOfBirth"
  | "citizenship"
  | "maritalStatus"
  | "numberOfDependents"
  | "highSchoolCompletion"
  | "degreeProgram"
  | "workStudy"
  | "parentEducation"
  | "householdSize"
  | "incomeRange";

export interface Question {
  id: string;
  type:
    | "text"
    | "email"
    | "textarea"
    | "radio"
    | "checkbox"
    | "number"
    | "date";
  label: string;
  options?: string[];
  validation: {
    required?: string | boolean;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    min?: {
      value: number;
      message: string;
    };
    max?: {
      value: number;
      message: string;
    };
  };
}
