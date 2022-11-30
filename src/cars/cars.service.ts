import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid';
import { Car } from './interface/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: v4(),
      brand: 'Toyota',
      model: 'X0-O12',
    },
    {
      id: v4(),
      brand: 'Mazda',
      model: '120-3',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' was not found`);
    }
    return car;
  }
}
