import { prisma } from "../../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/newUserDTO";

export class NewUserUseCase {
  async createUser({ name, city, country, favorite_sport }: CreateUserDTO) {
    const userExists = await prisma.user.findFirst({
      where: {
        name,
      },
    });

    if (userExists) {
      return;
    }

    const user = await prisma.user.create({
      data: {
        name,
        city,
        country,
        favorite_sport,
      },
    });

    return user;
  }
}
