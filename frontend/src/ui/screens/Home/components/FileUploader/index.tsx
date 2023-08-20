import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ImageBackground from "../../../../assets/no-data.svg";
import { useContext, useRef } from "react";
import { useFileUploader } from "./hooks/useFileUploader";
import AlertDialog from "./components/AlertDialog";
import { UsersContext } from "../../../../../infra/contexts/UsersContexts";

const FileUploader = () => {
  const { isLoading, setIsLoading } = useContext(UsersContext);
  const { handlers, items } = useFileUploader();
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div data-testid="meucu">
      <Flex flexDirection="column" data-testid="file-uploader-container">
        <Box
          data-testid="file-uploader-container"
          border="3px dashed #EFEFEF"
          padding="24px"
          borderRadius="10px"
          position={"relative"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src={ImageBackground} height="25vh" data-testid="my-image" />
          <Text
            fontSize={["1.5rem"]}
            fontWeight="semibold"
            color="white"
            textAlign="center"
          >
            {isLoading
              ? "Loading your file"
              : "Drop here your CSV file or click the button bellow"}
          </Text>
          <Input
            ref={inputRef}
            type="file"
            accept="text/csv"
            position={"absolute"}
            bottom={0}
            top={0}
            left={0}
            right={0}
            opacity={0}
            height="100%"
            cursor="default"
            onChange={(e) => {
              e.preventDefault();

              handlers.handleSelectFile(e.target.files![0]);

              onOpen();
            }}
            onDrop={(e) => {
              e.preventDefault();
              handlers.handleSelectFile(e.dataTransfer.files[0]);

              onOpen();
            }}
          />
        </Box>

        <Button
          marginTop="3vh"
          width=""
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          Choose file
        </Button>
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
          filename={items.currentFile?.name || ""}
          onConfirm={() => {
            setIsLoading(true);
            handlers.handleOnConfirmDialog(onClose);
          }}
        />
      </Flex>
    </div>
  );
};

export default FileUploader;
