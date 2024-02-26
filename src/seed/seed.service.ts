import { Injectable } from '@nestjs/common';

// ? Services
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

// ? Seeds
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'SEED EXECUTED SUCCESSFULLY';
  }
}
