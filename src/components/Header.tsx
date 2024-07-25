import React from "react";
import { useClientContext } from "../context/ClientContext";

const Header: React.FC = () => {
  const { client } = useClientContext();

  return (
    <header className="bg-primary text-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{client?.name || "SAI App"}</h1>
        {client?.logo && (
          <img src={client.logo} alt={`${client.name} logo`} className="h-8" />
        )}
      </div>
    </header>
  );
};

export default Header;
