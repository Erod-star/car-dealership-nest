import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    updatedAt: new Date().getTime(),
    craetedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    updatedAt: new Date().getTime(),
    craetedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    updatedAt: new Date().getTime(),
    craetedAt: new Date().getTime(),
  },
];
