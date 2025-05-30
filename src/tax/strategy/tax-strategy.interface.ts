export interface TaxStrategy {
  calculate(salary: number): number;
}