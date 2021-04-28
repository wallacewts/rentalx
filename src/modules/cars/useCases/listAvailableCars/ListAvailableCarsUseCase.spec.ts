import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import ListAvailableCarsUseCase from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Available",
      category_id: "fake id",
      daily_rate: 100,
      description: "Available car",
      fine_amount: 20,
      license_plate: "ETR-0204",
      name: "Car",
    });
    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Available",
      category_id: "fake id",
      daily_rate: 100,
      description: "Available car",
      fine_amount: 20,
      license_plate: "ETR-0204",
      name: "Car",
    });
    await carsRepositoryInMemory.create({
      brand: "teste",
      category_id: "teste",
      daily_rate: 100,
      description: "teste",
      fine_amount: 20,
      license_plate: "teste",
      name: "teste",
    });
    const cars = await listAvailableCarsUseCase.execute({ brand: "Available" });

    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by car name", async () => {
    const car1 = await carsRepositoryInMemory.create({
      brand: "Available",
      category_id: "fake id",
      daily_rate: 100,
      description: "Available car",
      fine_amount: 20,
      license_plate: "ETR-0204",
      name: "Car",
    });
    const car2 = await carsRepositoryInMemory.create({
      brand: "Available 2",
      category_id: "fake id",
      daily_rate: 20,
      description: "Available car 2",
      fine_amount: 50,
      license_plate: "TRH-7659",
      name: "Car",
    });
    await carsRepositoryInMemory.create({
      brand: "test",
      category_id: "test",
      daily_rate: 100,
      description: "test",
      fine_amount: 20,
      license_plate: "test",
      name: "test",
    });
    const cars = await listAvailableCarsUseCase.execute({ name: "Car" });

    expect(cars).toHaveLength(2);
    expect(cars).toEqual([car1, car2]);
  });

  it("should be able to list all available cars by car category", async () => {
    const car1 = await carsRepositoryInMemory.create({
      brand: "Available",
      category_id: "fake id",
      daily_rate: 100,
      description: "Available car",
      fine_amount: 20,
      license_plate: "ETR-0204",
      name: "Car",
    });
    const car2 = await carsRepositoryInMemory.create({
      brand: "test",
      category_id: "fake id",
      daily_rate: 100,
      description: "test",
      fine_amount: 20,
      license_plate: "test",
      name: "test",
    });
    await carsRepositoryInMemory.create({
      brand: "test",
      category_id: "test",
      daily_rate: 100,
      description: "test",
      fine_amount: 20,
      license_plate: "test",
      name: "test",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "fake id",
    });

    expect(cars).toHaveLength(2);
    expect(cars).toEqual([car1, car2]);
  });
});
