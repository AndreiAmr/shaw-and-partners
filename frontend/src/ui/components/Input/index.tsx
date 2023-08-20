import { Input as ChakraInput, Flex } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface InputProps {
  value: string;
  onChange: (search: string) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <Flex
      alignItems="center"
      background="#ffffff"
      //   boxShadow="10px 10px 30px #d9d9d9,
      // -10px -10px 30px #ffffff"
      borderRadius="10px"
      paddingRight="10px"
      width="90%"
      maxW="500px"
      border="1px solid #d9d9d9"
    >
      <ChakraInput
        border="none"
        outline="none"
        placeholder="Search for name, country, city or favorite sport"
        width="100%"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Flex
        borderLeft="1px solid #e2e2e2"
        padding="0 10px"
        height="80%"
        alignItems="center"
      >
        <BsSearch />
      </Flex>
    </Flex>
  );
};

export default Input;
