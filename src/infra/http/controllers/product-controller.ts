import { Request, Response } from "express";
import { HttpResponse } from "../../../core/infra/http/response";
import { CreateProductUseCase } from "../../../application/modules/product/create-product";
import { ReadAllProductsUseCase } from "../../../application/modules/product/read-all-products";
import { ReadOneProductUseCase } from "../../../application/modules/product/read-one-product";

export class ProductController {
  async Create(request: Request, response: Response) {
    return response
      .status(201)
      .json(
        new HttpResponse(
          201,
          await new CreateProductUseCase().execute(request.body)
        )
      );
  }

  async FindAll(request: Request, response: Response) {
    return response
      .status(200)
      .json(
        new HttpResponse(200, await new ReadAllProductsUseCase().execute())
      );
  }

  async FindOne(request: Request, response: Response) {
    const result = await new ReadOneProductUseCase().execute(request.params.id);
    if (result.isEmpty()) {
      return response.status(404).json(new HttpResponse(404, null));
    }
    return response.status(200).json(new HttpResponse(200, result.get()));
  }
}
