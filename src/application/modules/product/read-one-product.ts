import { Optional } from "../../../core/domain/optional";
import { UseCase } from "../../../core/domain/use-case";
import { IProductRepository } from "../../../core/infra/database/repositories/models/product-repository";
import { ProductRepository } from "../../../infra/database/repositories/product-repository";

export class ReadOneProductUseCase
  implements
    UseCase<
      Optional<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
      }>
    >
{
  private readonly _repository: IProductRepository;
  constructor() {
    this._repository = new ProductRepository();
  }
  async execute(id: string) {
    return await this._repository.findById(id);
  }
}
