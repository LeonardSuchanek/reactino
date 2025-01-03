import axios from 'axios';

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

export const fetchChatGPTResponse = async (token: String, messages: { role: string; content: string }[]) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Fehler bei der API-Anfrage:", error);
    throw new Error("API-Anfrage fehlgeschlagen.");
  }
};
