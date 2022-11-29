import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
    },
    {
      id: 2,
      brand: 'Mazda',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    console.log('id mor', id);

    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' was not found`);
    }
    return car;
  }
}
