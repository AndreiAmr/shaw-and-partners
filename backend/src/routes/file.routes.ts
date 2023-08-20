import { Router } from "express";
import { UploadFileController } from "../modules/file/useCases/uploadFile/uploadFileController";
import multer from "multer";

const uploadFileController = new UploadFileController();
const fileRoutes = Router();

const storage = multer.diskStorage({
  destination: (_, __, callback) => {
    callback(null, "uploads");
  },
  filename: (_, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

fileRoutes.post(
  "/api/files",
  upload.single("file"),
  uploadFileController.handle
);

export { fileRoutes };
