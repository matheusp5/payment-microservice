import { UseCase } from "../../../core/domain/use-case";
import { IUserRepository } from "../../../core/infra/database/repositories/models/user-repository";
import { UserRepository } from "../../../infra/database/repositories/user-repository";
import crypto from "crypto";

export class CreateUserUseCase
  implements
    UseCase<{
      id: string;
      name: string;
      email: string;
      phone: string;
      createdAt: Date;
    }>
{
  private readonly _repository: IUserRepository;
  constructor() {
    this._repository = new UserRepository();
  }
  async execute(data: { name: string; email: string; phone: string }) {
    return await this._repository.create({
      ...data,
      id: crypto.randomUUID().toString(),
      createdAt: new Date(),
    });
  }
}
