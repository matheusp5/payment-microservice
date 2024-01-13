import { UseCase } from "../../../core/domain/use-case";
import { IInvoiceRepository } from "../../../core/infra/database/repositories/models/invoice-repository";
import { InvoiceRepository } from "../../../infra/database/repositories/invoice-repository";
import crypto from "crypto";

export class CreateInvoiceUseCase
  implements
    UseCase<{
      id: string;
      status: string;
      externalReference: string;
      createdAt: Date;
      orderId: string;
    }>
{
  private readonly _repository: IInvoiceRepository;
  constructor() {
    this._repository = new InvoiceRepository();
  }
  async execute(data: { orderId: string; externalReference: string }) {
    return await this._repository.create({
      ...data,
      id: crypto.randomUUID().toString(),
      status: "pending",
      createdAt: new Date(),
    });
  }
}
