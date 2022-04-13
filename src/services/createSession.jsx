import { api } from "./api";

export const createSession = async (email, password) => {
  return api.post("./usuarios/login", { email, password });
};
