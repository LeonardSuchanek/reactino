import axios from 'axios';

const API_URL = "https://api.openai.com/v1/chat/completions";
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
