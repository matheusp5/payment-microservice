import { PrismaClient } from "@prisma/client";
import { IPrismaFactory } from "../../core/infra/database/factories/prisma-factory";

let client: PrismaClient | null = null;

export class PrismaFactory implements IPrismaFactory {
  getInstance(): PrismaClient {
    if (!client) client = new PrismaClient();
    return client;
  }
}
