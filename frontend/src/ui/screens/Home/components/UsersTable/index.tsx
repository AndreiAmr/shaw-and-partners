import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UsersContext } from "../../../../../infra/contexts/UsersContexts";
import { Zoom } from "react-awesome-reveal";
import UserInfo from "../../../../components/UserInfo";
import Input from "../../../../components/Input";

export const UsersTable = () => {
  const { users, search, setSearch, isLoading } = useContext(UsersContext);
  return (
    <Flex direction="column" gap="10px" width="90%">
      <Flex
        wrap="wrap"
        justifyContent={[
          "flex-end",
          "flex-end",
          "flex-end",
          "space-between",
          "space-between",
        ]}
        alignItems="flex-end"
        gap="10px"
      >
        <Flex gap="10px">
          <Button>Upload file CSV file</Button>
        </Flex>
        <Input value={search} onChange={setSearch} />
      </Flex>
      <Flex
        wrap="wrap"
        gap="20px"
        width="100%"
        paddingBottom="20px"
        justifyContent="center"
        marginTop="26px"
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Zoom cascade duration={500}>
            {users.map((user) => (
              <UserInfo {...user} />
            ))}
          </Zoom>
        )}
      </Flex>
    </Flex>
  );
};
export default UsersTable;
