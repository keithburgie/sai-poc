import React from "react";
import { Link } from "react-router-dom";
import { useClientContext } from "../context/ClientContext";

const Welcome: React.FC = () => {
  const { client } = useClientContext();

  if (!client) return null;

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to {client.name}</h1>
      <p className="mb-4">We appreciate your participation in our application.</p>
      <Link
        to="../survey"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80"
      >
        Start Application
      </Link>
    </div>
  );
};

export default Welcome;
