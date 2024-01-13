import { Optional } from "../../../core/domain/optional";
import { UseCase } from "../../../core/domain/use-case";
import { IUserRepository } from "../../../core/infra/database/repositories/models/user-repository";
import { UserRepository } from "../../../infra/database/repositories/user-repository";

export class ReadOneUserUseCase
  implements
    UseCase<
      Optional<{
        id: string;
        name: string;
        email: string;
        phone: string;
        createdAt: Date;
      }>
    >
{
  private readonly _repository: IUserRepository;
  constructor() {
    this._repository = new UserRepository();
  }
  async execute(id: string) {
    return await this._repository.findById(id);
  }
}
