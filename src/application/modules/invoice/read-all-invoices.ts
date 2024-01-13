import { UseCase } from "../../../core/domain/use-case";
import { IInvoiceRepository } from "../../../core/infra/database/repositories/models/invoice-repository";
import { InvoiceRepository } from "../../../infra/database/repositories/invoice-repository";

export class ReadAllInvoicesUseCase
  implements
    UseCase<any>
{
  private readonly _repository: IInvoiceRepository;
  constructor() {
    this._repository = new InvoiceRepository();
  }
  async execute() {
    return await this._repository.findAll();
  }
}
