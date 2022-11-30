import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { v4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
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

  fillCarsWithSeed(cars: Car[]) {
    this.cars = cars;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let car = this.findById(id);

    if (updateCarDto?.id !== id) {
      throw new BadRequestException('Not valid id');
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return {
          ...car,
          ...updateCarDto,
          id,
        };
      }
      return car;
    });

    return car;
  }

  createCar(cardDto: CreateCarDto) {
    this.cars.push({
      brand: cardDto.brand,
      model: cardDto.model,
      id: v4(),
    });
    return cardDto;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' was not found`);
    }
    return car;
  }

  deleteCar(id: string) {
    // const index = this.cars.findIndex((car) => car.id === id);
    // if (index < 0) {
    //   throw new NotFoundException(`Car with id '${id}' was not found`);
    // }
    // console.log(index);

    // this.cars.splice(index, 1);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
