import { Product } from "@prisma/client";
import { DataRepository } from "../data-repository";

export interface IProductRepository extends DataRepository<Product, string> {}
