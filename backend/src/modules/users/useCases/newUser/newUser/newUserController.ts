import { Request, Response } from "express";
import { CreateUserDTO } from "../../dtos/newUserDTO";
import { NewUserUseCase } from "./newUserUseCase";

export class NewUserController {
  async create(req: Request, res: Response): Promise<void> {
    const { name, city, country, favorite_sport } = req.body as CreateUserDTO;
    const newUserUseCase = new NewUserUseCase();

    const userCreated = await newUserUseCase.createUser({
      name,
      city,
      country,
      favorite_sport,
    });

    res.status(200).json(userCreated);
  }
}
