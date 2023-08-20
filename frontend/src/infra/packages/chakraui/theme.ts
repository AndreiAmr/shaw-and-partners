import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        background: "#27374D",
      },
      "*": {
        padding: 0,
        margin: 0,
        "box-sizing": "border-box",
      },
    },
  },
});
export default theme;
