import { Request, Response } from "express";
import { UploadFileUseCase } from "./uploadFileUseCase";

export class UploadFileController {
  async handle(req: Request, res: Response): Promise<void> {
    const filename = req.file?.filename;
    const uploadFileUseCase = new UploadFileUseCase();

    if (!filename) {
      res.sendStatus(400);
      return;
    }

    const onFinish = (statusCode: number) => {
      res.sendStatus(statusCode);
    };

    await uploadFileUseCase.execute({ filename, callbackOnFinish: onFinish });
  }
}
