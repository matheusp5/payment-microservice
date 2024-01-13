import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../application/modules/user/create-user";
import { ReadAllUsersUseCase } from "../../../application/modules/user/read-all-users";
import { ReadOneUserUseCase } from "../../../application/modules/user/read-one-user";
import { HttpResponse } from "../../../core/infra/http/response";

export class UserController {
  async Create(request: Request, response: Response) {
    return response
      .status(201)
      .json(
        new HttpResponse(
          201,
          await new CreateUserUseCase().execute(request.body)
        )
      );
  }

  async FindAll(request: Request, response: Response) {
    return response
      .status(200)
      .json(new HttpResponse(200, await new ReadAllUsersUseCase().execute()));
  }

  async FindOne(request: Request, response: Response) {
    const result = await new ReadOneUserUseCase().execute(request.params.id);
    if (result.isEmpty()) {
      return response.status(404).json(new HttpResponse(404, null));
    }
    return response.status(200).json(new HttpResponse(200, result.get()));
  }
}
