import { Invoice } from "@prisma/client";
import { DataRepository } from "../data-repository";

export interface IInvoiceRepository extends DataRepository<Invoice, string> {
    findByUserId(userId: string);
}
