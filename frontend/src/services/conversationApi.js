import api from "./api";

export const getConversations = async () => {
  const response = await api.get(
    "/conversations"
  );

  return response.data;
};

export const getConversationById =
  async (id) => {
    const response = await api.get(
      `/conversations/${id}`
    );

    return response.data;
  };