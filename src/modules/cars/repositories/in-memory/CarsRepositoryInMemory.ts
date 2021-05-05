import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import Car from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

export default class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = [];

  async create({
    id,
    brand,
    category_id,
    daily_rate,
    description,
    name,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      id,
      brand,
      category_id,
      daily_rate,
      description,
      name,
      fine_amount,
      license_plate,
    });
    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const byBrandOrNameOrCategoryId = (car) =>
      car.brand === brand ||
      car.category_id === category_id ||
      car.name === name;
    const availableCars = this.cars.filter((car) => car.available);
    const filteredCars =
      brand || category_id || name
        ? availableCars.filter(byBrandOrNameOrCategoryId)
        : availableCars;

    return filteredCars;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }
}
