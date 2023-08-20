import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import App from "../src/App";

jest.mock("@chakra-ui/react", () => {
  return {
    ChakraProvider: () => {},
    extendTheme: () => {},
  };
});

jest.mock("react-awesome-reveal", () => {
  return {
    Zoom: () => {},
  };
});

it("should render", () => {
  const component = render(<App />, {
    wrapper: ChakraProvider,
  });

  expect(component).toMatchSnapshot();
});
