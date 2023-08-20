import Header from "../src/ui/components/Header";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

jest.mock("@chakra-ui/react", () => {
  return {
    ChakraProvider: () => {},
  };
});

jest.mock("react-awesome-reveal", () => {
  return {
    Zoom: () => {},
  };
});

test("testing", () => {
  const component = render(<Header />, {
    wrapper: ChakraProvider,
  });

  expect(component).toMatchSnapshot();
});
