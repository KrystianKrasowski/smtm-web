import { Pipe, PipeTransform } from '@angular/core';
import { Money } from './money';

@Pipe({ name: 'money' })
export class MoneyPipe implements PipeTransform {

  transform(value: Money, ...args: any[]): string {
    return (value.amount / Math.pow(10, value.currency.precision))
      .toFixed(value.currency.precision)
      .concat(' ')
      .concat(value.currency.codeName);
  }
}
