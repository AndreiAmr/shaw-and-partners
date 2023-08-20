import { Flex } from "@chakra-ui/react";

import UsersTable from "./components/UsersTable";
import FileUploader from "./components/FileUploader";
import { useContext } from "react";
import { UsersContext } from "../../../infra/contexts/UsersContexts";

const Home = () => {
  const { fileLoaded } = useContext(UsersContext);

  return (
    <Flex justifyContent="center" width="100%" flex={1} mt="10vh">
      {fileLoaded ? <UsersTable /> : <FileUploader />}
    </Flex>
  );
};

export default Home;
