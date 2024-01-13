import { PrismaClient } from "@prisma/client";

export interface IPrismaFactory {
  getInstance(): PrismaClient;
}
