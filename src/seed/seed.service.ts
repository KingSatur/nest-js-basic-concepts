import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDb() {
    this.carService.fillCarsWithSeed(CARS_SEED);
    this.brandService.fillBrandsWithSeed(BRAND_SEED);
    return `This action returns all seed`;
  }
}
