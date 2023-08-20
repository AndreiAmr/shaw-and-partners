import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getUsers } from "../services/get-users";
import { UserProps } from "../types/user";

const UsersContext = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: UserProps[];
  handleGetUsers: (search?: string) => Promise<void>;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  fileLoaded: boolean;
  setFileLoaded: (fileLoaded: boolean) => void;
}>({
  users: [],
  handleGetUsers: async () => {},
  isLoading: false,
  setIsLoading: () => {},
  search: "",
  setSearch: () => {},
  fileLoaded: false,
  setFileLoaded: () => {},
});

const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [fileLoaded, setFileLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleGetUsers = async (infoToSearch?: string) => {
    setIsLoading(true);
    const usersFinded = await getUsers(infoToSearch);
    setUsers(usersFinded);
    setIsLoading(false);
  };

  useEffect(() => {
    if (fileLoaded) {
      handleGetUsers(search);
    }
  }, [search, fileLoaded]);

  return (
    <UsersContext.Provider
      value={{
        handleGetUsers,
        users,
        isLoading,
        setIsLoading,
        search,
        setSearch,
        setFileLoaded,
        fileLoaded,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersContextProvider };
