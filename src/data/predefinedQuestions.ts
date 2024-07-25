import { Question } from "../types/survey";

export const predefinedQuestions: Question[] = [
  {
    id: "name",
    type: "text",
    label: "What is your full legal name?",
    validation: { required: "Full legal name is required" },
  },
  {
    id: "email",
    type: "email",
    label: "What is your email address?",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    id: "ssn",
    type: "text",
    label: "What is your Social Security Number (SSN)?",
    validation: {
      required: "SSN is required",
      pattern: {
        value: /^\d{3}-\d{2}-\d{4}$/,
        message: "Invalid SSN format. Please use XXX-XX-XXXX",
      },
    },
  },
  {
    id: "dateOfBirth",
    type: "date",
    label: "What is your date of birth?",
    validation: {
      required: "Date of birth is required",
    },
  },
  {
    id: "citizenship",
    type: "radio",
    label: "What is your citizenship status?",
    options: [
      "U.S. Citizen",
      "Eligible Non-Citizen",
      "Not a Citizen or Eligible Non-Citizen",
    ],
    validation: { required: "Please select your citizenship status" },
  },
  {
    id: "maritalStatus",
    type: "radio",
    label: "What is your marital status?",
    options: ["Single", "Married", "Separated", "Divorced", "Widowed"],
    validation: { required: "Please select your marital status" },
  },
  {
    id: "numberOfDependents",
    type: "number",
    label: "How many dependents do you have?",
    validation: {
      required: "Number of dependents is required",
      min: {
        value: 0,
        message: "Number of dependents cannot be negative",
      },
      max: {
        value: 20,
        message: "Please contact support if you have more than 20 dependents",
      },
    },
  },
  {
    id: "highSchoolCompletion",
    type: "radio",
    label:
      "What will your high school completion status be when you begin college in the 2024-2025 school year?",
    options: [
      "High school diploma",
      "GED certificate",
      "Homeschooled",
      "None of the above",
    ],
    validation: {
      required: "Please select your high school completion status",
    },
  },
  {
    id: "degreeProgram",
    type: "radio",
    label:
      "What degree or certificate will you be working on when you begin the 2024-2025 school year?",
    options: [
      "1st Bachelor's degree",
      "2nd Bachelor's degree",
      "Associate degree",
      "Certificate or diploma",
      "Graduate or professional degree",
      "Not sure",
    ],
    validation: { required: "Please select your degree program" },
  },
  {
    id: "workStudy",
    type: "radio",
    label: "Are you interested in being considered for work-study?",
    options: ["Yes", "No", "Don't know"],
    validation: { required: "Please indicate your interest in work-study" },
  },
  {
    id: "parentEducation",
    type: "checkbox",
    label: "Highest school completed by parent(s)? (Select all that apply)",
    options: [
      "Middle school/Jr. high",
      "High school",
      "College or beyond",
      "Other/unknown",
    ],
    validation: {
      required: "Please select at least one option for parent education",
    },
  },
  {
    id: "householdSize",
    type: "text",
    label: "How many people are in your household?",
    validation: {
      required: "Household size is required",
      pattern: {
        value: /^[1-9]\d*$/,
        message: "Please enter a valid number",
      },
    },
  },
  {
    id: "incomeRange",
    type: "radio",
    label: "What is your household income range?",
    options: [
      "$0 - $25,000",
      "$25,001 - $50,000",
      "$50,001 - $75,000",
      "$75,001 - $100,000",
      "Over $100,000",
    ],
    validation: { required: "Please select your income range" },
  },
]