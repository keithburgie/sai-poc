import React from "react";
import { useNavigate } from "react-router-dom";
import Form, { FormData } from "../components/Form";
import { useClientContext } from "../context/ClientContext";
import { submitSurvey } from "../utils/api";

const FormPage: React.FC = () => {
  const { client } = useClientContext();
  const navigate = useNavigate();

  if (!client) return null;

  const handleSubmit = async (data: FormData) => {
    try {
      await submitSurvey(data, client.name);
      navigate("../completion");
    } catch (error) {
      console.error("Failed to submit survey:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{client.name} Estimator</h1>
      <p className="mb-6">
        Please complete the following form.
      </p>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPage;
