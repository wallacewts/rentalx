import { getRepository, Repository } from "typeorm";

import ISpecificationsRepository, {
  ICreateSpecificationDTO,
} from "@modules/cars/repositories/ISpecificationsRepository";

import Specification from "../entities/Specification";

export default class SpecificationsRepository
  implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ description, name });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}
