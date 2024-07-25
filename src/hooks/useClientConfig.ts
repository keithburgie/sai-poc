import { useClientContext } from "../context/ClientContext";
import { predefinedQuestions } from "../data/predefinedQuestions";
import { Question } from "../types/survey";

export const useClientConfig = () => {
  const { client } = useClientContext();

  const getQuestions = (): Question[] => {
    if (!client) return [];

    const questions = client.questionOrder.map((qId) => {
      const predefined = predefinedQuestions.find((q) => q.id === qId);
      if (predefined) return predefined;
      return client.customQuestions.find((q) => q.id === qId);
    });

    return questions.filter((q): q is Question => q !== undefined);
  };

  return {
    client,
    getQuestions,
  };
};
