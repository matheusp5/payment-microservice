import { UseCase } from "../../../core/domain/use-case";
import { IInvoiceRepository } from "../../../core/infra/database/repositories/models/invoice-repository";
import { InvoiceRepository } from "../../../infra/database/repositories/invoice-repository";

export class ReadUserIdInvoicesUseCase implements UseCase<any> {
  private readonly _repository: IInvoiceRepository;
  constructor() {
    this._repository = new InvoiceRepository();
  }
  async execute(userId: string) {
    return this._repository.findByUserId(userId);
  }
}
