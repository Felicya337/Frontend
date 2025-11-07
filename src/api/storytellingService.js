import api from "./axios";

export const getAllStorytelling = async () => {
  const response = await api.get("/storytelling");
  return response.data;
};

export const createStorytelling = async (data) => {
  const response = await api.post("/storytelling", data);
  return response.data;
};

export const updateStorytelling = async (id, data) => {
  const response = await api.put(`/storytelling/${id}`, data);
  return response.data;
};

export const deleteStorytelling = async (id) => {
  const response = await api.delete(`/storytelling/${id}`);
  return response.data;
};
