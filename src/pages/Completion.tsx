import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useClientContext } from "../context/ClientContext";

interface SubmittedData {
  data: { [key: string]: string | string[] };
  clientName: string;
  timestamp: string;
}

const Completion: React.FC = () => {
  const { client } = useClientContext();
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(
    null
  );

  useEffect(() => {
    const storedData = localStorage.getItem("submittedSurveyData");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
      // Clear the stored data after retrieving it
      localStorage.removeItem("submittedSurveyData");
    }
  }, []);

  if (!client) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-4">
        Your application for {client.name} has been submitted successfully.
      </p>
      {submittedData && (
        <div className="mt-8 mb-6">
          <h2 className="text-2xl font-bold mb-2">Submitted Data:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
      <Link
        to={"../welcome"}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 mr-4"
      >
        Back to Welcome Page
      </Link>
      <Link
        to="/"
        className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-80"
      >
        Back to Index
      </Link>
    </div>
  );
};

export default Completion;
