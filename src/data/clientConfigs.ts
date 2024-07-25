import { PredefinedQuestionId, Question } from "../types/survey";

export interface ClientConfig {
  name: string;
  logo: string;
  email: string;
  theme: string;
  questions: PredefinedQuestionId[];
  customQuestions: Question[];
  questionOrder: (PredefinedQuestionId | string)[];
}

export const clientConfigs: { [key: string]: ClientConfig } = {
  default: {
    name: "First School",
    logo: "https://placehold.co/250x32/black/white/?text=First+School+Logo",
    email: "help@the-first-school.edu",
    theme: "default",
    questions: [
      "name",
      "email",
      "ssn",
      "dateOfBirth",
      "citizenship",
      "maritalStatus",
      "numberOfDependents",
    ],
    customQuestions: [],
    questionOrder: [
      "name",
      "email",
      "ssn",
      "dateOfBirth",
      "citizenship",
      "maritalStatus",
      "numberOfDependents",
    ],
  },
  client1: {
    name: "University A",
    logo: "https://placehold.co/250x32/black/white/?text=University+Logo",
    email: "contact@university-a.edu",
    theme: "college2",
    questions: [
      "name",
      "email",
      "ssn",
      "dateOfBirth",
      "citizenship",
      "highSchoolCompletion",
      "degreeProgram",
    ],
    customQuestions: [
      {
        id: "custom1",
        type: "textarea",
        label: "Why do you want to attend University A?",
        validation: {
          required: "Please provide a reason for attending University A",
        },
      },
    ],
    questionOrder: [
      "name",
      "email",
      "ssn",
      "dateOfBirth",
      "citizenship",
      "highSchoolCompletion",
      "degreeProgram",
      "custom1",
    ],
  },
  client2: {
    name: "College B",
    logo: "https://placehold.co/250x32/black/white/?text=College+Logo",
    email: "support@college-b.edu",
    theme: "college3",
    questions: [
      "name",
      "email",
      "ssn",
      "dateOfBirth",
      "maritalStatus",
      "numberOfDependents",
      "parentEducation",
      "householdSize",
      "incomeRange",
    ],
    customQuestions: [
      {
        id: "custom2",
        type: "radio",
        label: "Are you a first-generation college student?",
        options: ["Yes", "No"],
        validation: {
          required:
            "Please indicate if you are a first-generation college student",
        },
      },
    ],
    questionOrder: [
      "name",
      "email",
      "ssn",
      "dateOfBirth",
      "maritalStatus",
      "numberOfDependents",
      "parentEducation",
      "householdSize",
      "incomeRange",
      "custom2",
    ],
  },
  client3: {
    name: "Tech Institute C",
    logo: "https://placehold.co/250x32/black/white/?text=Tech+Institute+Logo",
    email: "info@tech-institute.edu",
    theme: "college4",
    questions: [
      "name",
      "email",
      "citizenship",
      "highSchoolCompletion",
      "degreeProgram",
      "workStudy",
    ],
    customQuestions: [
      {
        id: "custom3",
        type: "checkbox",
        label:
          "Which programming languages are you familiar with? (Select all that apply)",
        options: ["JavaScript", "Python", "Java", "C++", "Ruby", "Other"],
        validation: {
          required: "Please select at least one programming language",
        },
      },
    ],
    questionOrder: [
      "name",
      "email",
      "citizenship",
      "highSchoolCompletion",
      "degreeProgram",
      "workStudy",
      "custom3",
    ],
  },
  client4: {
    name: "Community College D",
    logo: "https://placehold.co/250x32/black/white/?text=Community+College+Logo",
    email: "help@community-college.edu",
    theme: "college5",
    questions: [
      "name",
      "email",
      "dateOfBirth",
      "degreeProgram",
      "parentEducation",
      "householdSize",
      "incomeRange",
    ],
    customQuestions: [
      {
        id: "custom4",
        type: "text",
        label: "What is your favorite subject in school?",
        validation: {
          required: "Please provide your favorite subject",
        },
      },
    ],
    questionOrder: [
      "name",
      "email",
      "dateOfBirth",
      "degreeProgram",
      "parentEducation",
      "householdSize",
      "incomeRange",
      "custom4",
    ],
  },
  client5: {
    name: "Art School E",
    logo: "https://placehold.co/250x32/black/white/?text=Art+School+Logo",
    email: "artsy@fartsy.edu",
    theme: "college6",
    questions: [
      "name",
      "email",
      "dateOfBirth",
      "degreeProgram",
      "parentEducation",
    ],
    customQuestions: [
      {
        id: "custom6",
        type: "textarea",
        label: "What inspires you to create art?",
        validation: {
          required: "Please provide your inspiration for creating art",
        },
      },
    ],
    questionOrder: [
      "name",
      "email",
      "dateOfBirth",
      "degreeProgram",
      "parentEducation",
      "custom6",
    ],
  }
};
