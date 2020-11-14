import { CategoryProgress } from './category-progress';
import { Money } from '../money';

export const CATEGORY_PROGRESSES: CategoryProgress[] = [
  {
    progress: 75,
    name: 'Regular saving',
    left: Money.of(95000, 'PLN'),
    total: Money.of(150000, 'PLN')
  },
  {
    progress: 100,
    name: 'Rent',
    left: Money.of(0, 'PLN'),
    total: Money.of(95000, 'PLN')
  },
  {
    progress: 87.95,
    name: 'Groceries',
    left: Money.of(45355, 'PLN'),
    total: Money.of(80000, 'PLN')
  }
];
