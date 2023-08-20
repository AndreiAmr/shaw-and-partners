import { useState, useContext } from "react";
import { importFile } from "../../../../../../infra/services/import-file";
import { UsersContext } from "../../../../../../infra/contexts/UsersContexts";

const useFileUploader = () => {
  const { handleGetUsers, setFileLoaded, setIsLoading } =
    useContext(UsersContext);
  const [currentFile, setCurrentFile] = useState<File>();
  // const [isLoading, setIsLoading] = useState<boolean>();

  const handleOnConfirmDialog = async (closeDialog: () => void) => {
    await importFile(currentFile!);

    setTimeout(async () => {
      await handleGetUsers();
      setFileLoaded(true);
      setIsLoading(false);
    }, 3000);
    closeDialog();
  };

  return {
    items: {
      currentFile,
    },
    handlers: {
      handleSelectFile: setCurrentFile,
      handleOnConfirmDialog,
    },
  };
};

export { useFileUploader };
