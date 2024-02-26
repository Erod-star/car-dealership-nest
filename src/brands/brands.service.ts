import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto/brands.dto';
import { v4 as uuid } from 'uuid';

import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   updatedAt: new Date().getTime(),
    //   craetedAt: new Date().getTime(),
    // },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brandDB = this.brands.find((brand) => brand.id === id);
    if (brandDB) return brandDB;
    throw new NotFoundException(`The car with the id '${id}' was not founded`);
  }

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      updatedAt: new Date().getTime(),
      craetedAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if ((brand.id = id)) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
