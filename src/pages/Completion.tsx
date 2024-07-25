import React from "react";
import { Link } from "react-router-dom";
import { useClientContext } from "../context/ClientContext";

const Completion: React.FC = () => {
  const { client } = useClientContext();

  if (!client) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-4">
        Your application for {client.name} has been submitted successfully.
      </p>
      <p className="mb-6">We appreciate your feedback and participation.</p>
      <Link
        to="../welcome"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 mr-4"
      >
        Back to Welcome
      </Link>
      <Link
        to="/"
        className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-80"
      >
        Home
      </Link>
    </div>
  );
};

export default Completion;
