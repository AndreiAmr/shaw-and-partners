import fs from "fs";
import { parse } from "csv-parse";
import { prisma } from "../../../../prisma/client";
import { UploadFileDTO } from "../../dtos/uploadFileDTO";

export class UploadFileUseCase {
  async execute({ filename, callbackOnFinish }: UploadFileDTO) {
    fs.createReadStream(`uploads/${filename}`).pipe(
      parse({ delimiter: ",", from_line: 2 })
        .on("data", async (row: string[]) => {
          console.log(row);
          await prisma.user.create({
            data: {
              name: row[0],
              city: row[1],
              country: row[2],
              favorite_sport: row[3],
            },
          });
        })
        .on("finish", () => {
          callbackOnFinish(200);
        })
        .on("error", () => {
          callbackOnFinish(500);
        })
    );
  }
}
