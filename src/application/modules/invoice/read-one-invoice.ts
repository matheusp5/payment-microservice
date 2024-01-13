import { Optional } from "../../../core/domain/optional";
import { UseCase } from "../../../core/domain/use-case";
import { IInvoiceRepository } from "../../../core/infra/database/repositories/models/invoice-repository";
import { InvoiceRepository } from "../../../infra/database/repositories/invoice-repository";

export class ReadOneInvoiceUseCase
  implements
    UseCase<
      Optional<{
        id: string;
        status: string;
        externalReference: string;
        createdAt: Date;
        orderId: string;
      }>
    >
{
  private readonly _repository: IInvoiceRepository;
  constructor() {
    this._repository = new InvoiceRepository();
  }
  async execute(id: string) {
    return await this._repository.findById(id);
  }
}
