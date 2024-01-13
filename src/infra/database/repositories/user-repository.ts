import { PrismaClient, User } from "@prisma/client";
import { Optional } from "../../../core/domain/optional";
import { IUserRepository } from "../../../core/infra/database/repositories/models/user-repository";
import { PrismaFactory } from "../prisma-factory";

export class UserRepository implements IUserRepository {
  private readonly client: PrismaClient;
  constructor() {
    this.client = new PrismaFactory().getInstance();
  }

  async findAll(): Promise<
    {
      id: string;
      name: string;
      email: string;
      phone: string;
      createdAt: Date;
    }[]
  > {
    return await this.client.user.findMany();
  }
  async findById(
    id: string
  ): Promise<
    Optional<{
      id: string;
      name: string;
      email: string;
      phone: string;
      createdAt: Date;
    }>
  > {
    return new Optional<User>(
      await this.client.user.findFirst({ where: { id } })
    );
  }
  async create(model: {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
  }): Promise<{
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
  }> {
    return await this.client.user.create({
      data: model,
    });
  }
}
