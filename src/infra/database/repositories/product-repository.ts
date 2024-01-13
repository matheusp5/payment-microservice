import { PrismaClient, Product } from "@prisma/client";
import { Optional } from "../../../core/domain/optional";
import { IProductRepository } from "../../../core/infra/database/repositories/models/product-repository";
import { PrismaFactory } from "../prisma-factory";

export class ProductRepository implements IProductRepository {
  private readonly client: PrismaClient;
  constructor() {
    this.client = new PrismaFactory().getInstance();
  }

  async findAll(): Promise<
    { id: string; name: string; price: number; createdAt: Date }[]
  > {
    return await this.client.product.findMany();
  }
  async findById(
    id: string
  ): Promise<
    Optional<{ id: string; name: string; price: number; createdAt: Date }>
  > {
    return new Optional<Product>(
      await this.client.product.findFirst({ where: { id } })
    );
  }
  async create(model: {
    id: string;
    name: string;
    price: number;
    createdAt: Date;
  }): Promise<{ id: string; name: string; price: number; createdAt: Date }> {
    return await this.client.product.create({
      data: model,
    });
  }
}
