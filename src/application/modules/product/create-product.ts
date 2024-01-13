import { UseCase } from "../../../core/domain/use-case";
import { IProductRepository } from "../../../core/infra/database/repositories/models/product-repository";
import { ProductRepository } from "../../../infra/database/repositories/product-repository";
import crypto from "crypto";

export class CreateProductUseCase
  implements
    UseCase<{
      id: string;
      name: string;
      price: number;
      createdAt: Date;
    }>
{
  private readonly _repository: IProductRepository;
  constructor() {
    this._repository = new ProductRepository();
  }
  async execute(data: { name: string; price: number }) {
    return await this._repository.create({
      ...data,
      id: crypto.randomUUID().toString(),
      createdAt: new Date(),
    });
  }
}
