import { Optional } from "../../../core/domain/optional";
import { UseCase } from "../../../core/domain/use-case";
import { IOrderRepository } from "../../../core/infra/database/repositories/models/order-repository";
import { OrderRepository } from "../../../infra/database/repositories/order-repository";

export class ReadOneOrderUseCase
  implements
    UseCase<
      Optional<{
        id: string;
        createdAt: Date;
        userId: string;
        productId: string;
        invoiceId: string;
      }>
    >
{
  private readonly _repository: IOrderRepository;
  constructor() {
    this._repository = new OrderRepository();
  }

  async execute(id: string) {
    return await this._repository.findById(id);
  }
}
