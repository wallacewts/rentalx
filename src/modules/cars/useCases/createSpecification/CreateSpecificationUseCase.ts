import { inject, injectable } from "tsyringe";

import ISpecificationsRepository from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAltreadyExists = await this.specificationRepository.findByName(
      name
    );

    if (specificationAltreadyExists) {
      throw new Error("Specification already exists!");
    }

    await this.specificationRepository.create({ description, name });
  }
}
