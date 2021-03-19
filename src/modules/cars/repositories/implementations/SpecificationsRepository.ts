import Specification from "../../models/Specification";
import ISpecificationsRepository, {
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

export default class SpecificationsRepository
  implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specificationInterator) => specificationInterator.name === name
    );

    return specification;
  }
}
