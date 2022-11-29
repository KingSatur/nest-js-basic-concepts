import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      ok: true,
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number) {
    return {
      ok: true,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      ok: true,
    };
  }
}
