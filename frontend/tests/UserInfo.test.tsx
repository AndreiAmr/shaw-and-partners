import UserInfo from "../src/ui/components/UserInfo";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

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

test("User Info Component", () => {
  const component = render(
    <UserInfo
      name="Andrei Amaral"
      city="São Paulo"
      country="Brasil"
      favorite_sport="Skateboarding"
    />,
    {
      wrapper: ChakraProvider,
    }
  );

  expect(component).toMatchSnapshot();
});
