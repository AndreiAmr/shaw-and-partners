import http from "../packages/axios";
import { UserProps } from "../types/user";

export const getUsers = async (searchInfo?: string) => {
  try {
    const { data } = await http.get(`/api/users?info=${searchInfo}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data as UserProps[];
  } catch (err) {
    throw new Error(String(err));
  }
};
