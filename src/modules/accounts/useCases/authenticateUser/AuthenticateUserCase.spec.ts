import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import UsersRepositoryInMemory from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";
import AppError from "@shared/errors/AppError";

import AuthenticateUserUserCase, {
  ERROR_MESSAGE,
} from "./AuthenticateUserCase";

describe("Authenticate User", () => {
  const mockUser: ICreateUserDTO = {
    driver_license: "000123",
    email: "usre@teste.com",
    password: "1234",
    name: "User Test",
  };
  let usersRepositoryInMemory: UsersRepositoryInMemory;
  let createUserUseCase: CreateUserUseCase;
  let authenticateUserUserCase: AuthenticateUserUserCase;

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUserCase = new AuthenticateUserUserCase(
      usersRepositoryInMemory
    );
  });

  it("should be able to authenticate an user", async () => {
    await createUserUseCase.execute(mockUser);
    const result = await authenticateUserUserCase.execute({
      email: mockUser.email,
      password: mockUser.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate a nonexistent user", async () => {
    try {
      await authenticateUserUserCase.execute({
        email: "false@email.com",
        password: "1234",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).message).toMatch(ERROR_MESSAGE);
      expect((error as AppError).statusCode).toBe(400);
    }
  });

  it("should not be able to authenticate with incorrent password", async () => {
    try {
      await createUserUseCase.execute(mockUser);
      await authenticateUserUserCase.execute({
        email: mockUser.email,
        password: "incorrect password",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).message).toMatch(ERROR_MESSAGE);
      expect((error as AppError).statusCode).toBe(400);
    }
  });
});
