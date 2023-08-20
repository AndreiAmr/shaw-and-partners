import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { UsersContextProvider } from "../contexts/UsersContexts";
import theme from "./chakraui/theme";

const PackagesProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <UsersContextProvider> {children} </UsersContextProvider>
    </ChakraProvider>
  );
};

export default PackagesProvider;
