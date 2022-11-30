import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: v4(),
      name: 'Toyota',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: v4(),
      name: 'Toyota 2',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: v4(),
      name: createBrandDto.name,
    };
    this.brands.push(brand);
    return brand;
  }

  fillBrandsWithSeed(brands: Brand[]) {
    this.brands = brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id '${id}' was not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto,
          updatedAt: Date.now(),
        };
      }
      return brand;
    });
    return updateBrandDto;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
