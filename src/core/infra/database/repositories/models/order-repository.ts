import { Order } from "@prisma/client";
import { DataRepository } from "../data-repository";

export interface IOrderRepository extends DataRepository<Order, string> {}
