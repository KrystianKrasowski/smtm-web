import { Currency } from './currency';

export class Money {

  readonly amount: number;
  readonly currency: Currency;

  private constructor(amount: number, currency: Currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static of(amount: number, currency: string): Money {
    return new Money(amount, Currency.of(currency));
  }
}
