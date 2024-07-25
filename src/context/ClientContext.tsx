import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { clientConfigs, ClientConfig } from "../data/clientConfigs";

interface ClientContextType {
  client: ClientConfig | null;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [client, setClient] = useState<ClientConfig | null>(null);
  const { clientId } = useParams<{ clientId: string }>();

  useEffect(() => {
    if (clientId) {
      const clientConfig = clientConfigs[clientId] || clientConfigs.default;
      setClient(clientConfig);
    }
  }, [clientId]);

  return (
    <ClientContext.Provider value={{ client }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error("useClientContext must be used within a ClientProvider");
  }
  return context;
};
