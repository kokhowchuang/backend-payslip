import { TaxCalculatorService } from '../../src/tax/tax-calculator.service';

describe('TaxCalculatorService', () => {
  let service: TaxCalculatorService;

  beforeEach(() => {
    service = new TaxCalculatorService();
  });

  it('should calculate total annual tax for salary = 60000', () => {
    const tax = service.calculateAnnualTax(60000);
    expect(tax).toBe(6000); 
  });

  it('should calculate total annual tax for salary = 200000', () => {
    const tax = service.calculateAnnualTax(200000);
    expect(tax).toBe(48000);
  });

  it('should calculate total annual tax for salary = 80150', () => {
    const tax = service.calculateAnnualTax(80150);
    expect(tax).toBe(10045); 
  });
});
