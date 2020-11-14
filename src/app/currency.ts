const CURRENCY_TABLE: Currency[] = [
  { codeName: 'PLN', precision: 2 },
  { codeName: 'EUR', precision: 2 },
  { codeName: 'USD', precision: 2 },
  { codeName: 'GBP', precision: 2 },
];

export class Currency {

  readonly codeName: string;
  readonly precision: number;

  static of(codeName: string): Currency {
    return CURRENCY_TABLE.find(currency => currency.codeName === codeName);
  }
}
