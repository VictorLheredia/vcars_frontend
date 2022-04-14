import { api } from "./api";

export const createSession = async (email, password) => {
  return api.post("./users/login", { email, password });
};
