import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import AppError from "../errors/AppError";
import UsersRepository from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "8fe412e91d15773cb10656bd29bd519a"
    ) as IPayload;
    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
