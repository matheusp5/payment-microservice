import { Order, PrismaClient, Product } from "@prisma/client";
import { Optional } from "../../../core/domain/optional";
import { IProductRepository } from "../../../core/infra/database/repositories/models/product-repository";
import { PrismaFactory } from "../prisma-factory";
import { IOrderRepository } from "../../../core/infra/database/repositories/models/order-repository";

export class OrderRepository implements IOrderRepository {
  private readonly client: PrismaClient;
  constructor() {
    this.client = new PrismaFactory().getInstance();
  }

  async findAll(): Promise<
    {
      id: string;
      createdAt: Date;
      userId: string;
      productId: string;
      invoiceId: string;
    }[]
  > {
    return await this.client.order.findMany();
  }
  async findById(
    id: string
  ): Promise<
    Optional<{
      id: string;
      createdAt: Date;
      userId: string;
      productId: string;
      invoiceId: string;
    }>
  > {
    return new Optional<Order>(
      await this.client.order.findFirst({ where: { id } })
    );
  }
  async create(model: {
    id: string;
    createdAt: Date;
    userId: string;
    productId: string;
    invoiceId: string;
  }): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    productId: string;
    invoiceId: string;
  }> {
    return await this.client.order.create({
      data: model,
    });
  }
}
