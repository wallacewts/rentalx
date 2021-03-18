import ISpecificationsRepository from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationAltreadyExists = this.specificationRepository.findByName(
      name
    );

    if (specificationAltreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({ description, name });
  }
}
