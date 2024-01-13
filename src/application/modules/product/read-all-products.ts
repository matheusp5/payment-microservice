import { UseCase } from "../../../core/domain/use-case";
import { IProductRepository } from "../../../core/infra/database/repositories/models/product-repository";
import { ProductRepository } from "../../../infra/database/repositories/product-repository";

export class ReadAllProductsUseCase
  implements
    UseCase<
      {
        id: string;
        name: string;
        price: number;
        createdAt: Date;
      }[]
    >
{
  private readonly _repository: IProductRepository;
  constructor() {
    this._repository = new ProductRepository();
  }
  async execute() {
    return await this._repository.findAll();
  }
}
