import { Money } from '../money';

export interface CategoryProgress {
  progress: number;
  name: string;
  left: Money;
  total: Money;
}
