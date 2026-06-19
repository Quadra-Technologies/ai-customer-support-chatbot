import axios from "axios";

const CHAT_API =
  "https://ai-customer-support-chatbot-0hlz.onrender.com/api";

export const getConversations = async () => {
  const response = await axios.get(
    `${CHAT_API}/conversations`
  );

  return response.data;
};

export const getConversationById =
  async (id) => {
    const response = await axios.get(
      `${CHAT_API}/conversations/${id}`
    );

    return response.data;
  };