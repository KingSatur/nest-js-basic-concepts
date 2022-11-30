import { Brand } from 'src/brands/entities/brand.entity';
import { v4 } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: v4(),
    name: 'Sony',
  },
  {
    id: v4(),
    name: 'Xbox',
  },
  {
    id: v4(),
    name: 'Nintendo',
  },
];
