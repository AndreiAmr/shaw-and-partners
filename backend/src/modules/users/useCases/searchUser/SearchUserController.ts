import { Request, Response } from "express";
import { SearchUserUseCase } from "./SearchUserUseCase";

export class SearchUserController {
  async search(req: Request, res: Response) {
    const info = req.query.info as string;

    const searchUserUseCase = new SearchUserUseCase();

    const users = await searchUserUseCase.handleSearch(info);

    res.status(200).json(users);
  }
}
