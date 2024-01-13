import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../../application/modules/order/create-order";
import { CreateInvoiceUseCase } from "../../../application/modules/invoice/create-invoice";
import { HttpResponse } from "../../../core/infra/http/response";
import crypto from "crypto";
import { ReadUserIdInvoicesUseCase } from "../../../application/modules/invoice/read-userid-invoices";
import { ReadAllInvoicesUseCase } from "../../../application/modules/invoice/read-all-invoices";

export class PaymentController {
  async Create(request: Request, response: Response) {
    try {
      const { userId, productId }: { userId: string; productId: string } =
        request.body;
      const externalReference = crypto.randomUUID();
      const order = await new CreateOrderUseCase().execute({
        userId,
        productId,
      });
      const invoice = await new CreateInvoiceUseCase().execute({
        orderId: order.id,
        externalReference,
      });
      return response
        .status(201)
        .json(new HttpResponse(201, { order, invoice }));
    } catch (e: any) {
      console.error("[Error] " + e.message);
      return response.status(500).json(new HttpResponse(500, null))
    }
  }

  async FindAll(request: Request, response: Response) {
    const result: any = await new ReadAllInvoicesUseCase().execute()
    return response.status(200).json(result.map((e: any) => {
      const date = new Date(e.createdAt)
      return {
        ...e,
        createdAt: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      }
    }))
  }

  async FindByUserId(request: Request, response: Response) {
    return response.status(200).json(new HttpResponse(200, await new ReadUserIdInvoicesUseCase().execute(request.params.id)))
  }
}
