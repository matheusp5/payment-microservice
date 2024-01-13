import { UseCase } from "../../../core/domain/use-case";
import { IOrderRepository } from "../../../core/infra/database/repositories/models/order-repository";
import { OrderRepository } from "../../../infra/database/repositories/order-repository";
import crypto from "crypto";

export class CreateOrderUseCase
  implements
    UseCase<{
      id: string;
      createdAt: Date;
      userId: string;
      productId: string;
      invoiceId: string;
    }>
{
  private readonly _repository: IOrderRepository;
  constructor() {
    this._repository = new OrderRepository();
  }
  async execute(data: { userId: string; productId: string }) {
    return await this._repository.create({
      ...data,
      id: crypto.randomUUID().toString(),
      invoiceId: "",
      createdAt: new Date(),
    });
  }
}
