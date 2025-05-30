import { TaxStrategy } from "./tax-strategy.interface";

export class TaxBracketStrategy implements TaxStrategy {
  constructor(
    private readonly minSalary: number,
    private readonly maxSalary: number | null,
    private readonly taxRate: number,
  ) {}
  calculate(salary: number): number {
    const upperBound = this.maxSalary ?? salary;
    const taxable = Math.min(salary, upperBound) - this.minSalary;

    return taxable > 0 ? taxable * this.taxRate : 0;
  }
}