export interface UploadFileDTO {
  filename: string;
  callbackOnFinish: (statusCode: number) => void;
}
