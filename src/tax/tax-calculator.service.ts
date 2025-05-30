import { TaxStrategy } from "./strategy/tax-strategy.interface";
import { TaxBracketStrategy } from './strategy/tax-bracket.strategy'
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaxCalculatorService {
  private strategies: TaxStrategy[] = [
    new TaxBracketStrategy(0, 20000, 0),             
    new TaxBracketStrategy(20000, 40000, 0.1),
    new TaxBracketStrategy(40000, 80000, 0.2),
    new TaxBracketStrategy(80000, 180000, 0.3),
    new TaxBracketStrategy(180000, null, 0.4),
  ];

  calculateAnnualTax(salary: number): number {
    return this.strategies.reduce((total, strategy) => total + strategy.calculate(salary), 0);
  }
}