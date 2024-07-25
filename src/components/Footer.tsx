import React from "react";
import { useClientContext } from "../context/ClientContext";

const Footer: React.FC = () => {
  const { client } = useClientContext();

  return (
    <footer className="bg-primary text-background p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2024 {client?.name || "Survey App"}. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <p>
              Contact: <a href={`mailto:${client?.email}`}>{client?.email}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
