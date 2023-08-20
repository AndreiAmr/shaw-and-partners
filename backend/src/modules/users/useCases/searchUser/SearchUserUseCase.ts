import { prisma } from "../../../../prisma/client";

export class SearchUserUseCase {
  async handleSearch(info: string) {
    if (!info) {
      const users = await prisma.user.findMany();
      return users;
    }

    const usersFinded = await prisma.user.findMany({
      where: {
        OR: [
          {
            city: {
              startsWith: info,
            },
          },
          {
            name: {
              startsWith: info,
            },
          },
          {
            country: {
              startsWith: info,
            },
          },
          {
            favorite_sport: {
              startsWith: info,
            },
          },
        ],
      },
    });

    return usersFinded;
  }
}
