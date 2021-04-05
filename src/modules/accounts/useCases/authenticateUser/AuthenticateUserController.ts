import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthenticateUserUserCase from "./AuthenticateUserCase";

export default class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUserCase);
    const authenticateInfo = await authenticateUserUseCase.execute({
      password,
      email,
    });

    return response.json(authenticateInfo);
  }
}
