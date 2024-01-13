import { Invoice, PrismaClient } from "@prisma/client";
import { Optional } from "../../../core/domain/optional";
import { IInvoiceRepository } from "../../../core/infra/database/repositories/models/invoice-repository";
import { PrismaFactory } from "../prisma-factory";

export class InvoiceRepository implements IInvoiceRepository {
  private readonly client: PrismaClient;
  constructor() {
    this.client = new PrismaFactory().getInstance();
  }
  async findByUserId(userId: string) {
    return await this.client.invoice.findMany({
      where: { order: { userId } },
      include: {
        order: true,
      },
    });
  }
  async findAll(): Promise<any> {
    return await this.client.invoice.findMany({
      include: {
        order: {
         include: {
          product: true,
          user: true
         } 
        }
      }
    });
  }
  async findById(id: string): Promise<
    Optional<{
      id: string;
      status: string;
      externalReference: string;
      createdAt: Date;
      orderId: string;
    }>
  > {
    return new Optional<Invoice>(
      await this.client.invoice.findFirst({ where: { id } })
    );
  }
  async create(model: {
    id: string;
    status: string;
    externalReference: string;
    createdAt: Date;
    orderId: string;
  }): Promise<{
    id: string;
    status: string;
    externalReference: string;
    createdAt: Date;
    orderId: string;
  }> {
    return await this.client.invoice.create({
      data: model,
    });
  }
}
