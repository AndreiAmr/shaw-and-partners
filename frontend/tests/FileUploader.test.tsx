import { render, screen } from "@testing-library/react";
import FileUploader from "../src/ui/screens/Home/components/FileUploader";

import "@testing-library/jest-dom";
import PackagesProvider from "../src/infra/packages";

jest.mock("@chakra-ui/react", () => {
  return {
    extendTheme: () => {},
    ChakraProvider: () => {},
    useDisclosure: () => ({
      isOpen: true,
      onClose: () => {},
      onOpen: () => {},
    }),
  };
});

test("File Uploader", async () => {
  const { container } = render(<FileUploader />, {
    wrapper: PackagesProvider,
  });

  screen.debug(container);

  expect(container).toMatchSnapshot();
});
