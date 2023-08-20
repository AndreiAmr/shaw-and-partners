import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      background="#27374D"
      borderBottom="1px solid black"
      height="10vh"
      maxHeight="100px"
      alignItems="center"
      padding="24px"
    >
      <Text>CSV Importer</Text>
    </Flex>
  );
};

export default Header;
