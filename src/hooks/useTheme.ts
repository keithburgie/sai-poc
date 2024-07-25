import { useEffect } from "react";
import { useClientContext } from "../context/ClientContext";
import { themes } from "../styles/themes";

export const useTheme = () => {
  const { client } = useClientContext();

  useEffect(() => {
    if (client) {
      const theme =
        themes[client.theme as keyof typeof themes] || themes.default;

      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--color-${key}`, value);
      });
    }
  }, [client]);
};
