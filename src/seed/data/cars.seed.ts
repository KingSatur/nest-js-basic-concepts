import { Car } from 'src/cars/interface/car.interface';
import { v4 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: v4(),
    brand: 'Toyota',
    model: 'TX',
  },
  {
    id: v4(),
    brand: 'Toyota',
    model: 'TXL',
  },
  {
    id: v4(),
    brand: 'Mazda',
    model: 'Tiburon',
  },
  {
    id: v4(),
    brand: 'Renault',
    model: 'Duster',
  },
  {
    id: v4(),
    brand: 'Ford',
    model: 'Ranger',
  },
];
