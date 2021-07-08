import { getRepository, Repository } from "typeorm";

import ICreateRentalDTO from "@modules/rentals/dtos/ICreateRentalDTO";
import IRentalsRepository from "@modules/rentals/repositories/IRentalsRepository";

import Rental from "../entities/Rental";

export default class RentalsRepository implements IRentalsRepository {
  repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.repository.findOne({ car_id });
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.repository.findOne({ user_id });
  }

  async create({
    user_id,
    expected_return_date,
    car_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      user_id,
      expected_return_date,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne(id);

    return rental;
  }
}
