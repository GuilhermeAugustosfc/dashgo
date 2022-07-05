import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type getUsersResponse = {
  userCount: number;
  users: User[];
};
export async function getUsers(page: number): Promise<getUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const userCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return { users, userCount };
}

export const useUsers = (page: number) => {
  return useQuery(["user", page], () => getUsers(page), {
    staleTime: 1000 * 5,
  });
};
