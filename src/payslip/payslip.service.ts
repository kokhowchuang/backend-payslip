import { TaxCalculatorService } from 'src/tax/tax-calculator.service';
import { PayslipResponseDto } from './dto/payslip-response.dto';
import { GeneratePayslipDto } from './dto/generate-payslip.dto';
import { Payslip } from './entity/payslip.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { roundToTwoDecimals } from 'util/number';

@Injectable()
export class PayslipService {
  constructor(
    private readonly taxCalculator: TaxCalculatorService,
    @InjectRepository(Payslip)
    private readonly payslipRepo: Repository<Payslip>,
  ) {}

  async generate(dto: GeneratePayslipDto): Promise<PayslipResponseDto> {
    const grossSalary = dto.annual_salary / 12;
    const monthlyTax =
      this.taxCalculator.calculateAnnualTax(dto.annual_salary) / 12;
    const netIncome = grossSalary - monthlyTax;

    await this.payslipRepo.save({
      employee_name: dto.employee_name,
      annual_salary: dto.annual_salary,
      monthly_income_tax: monthlyTax,
    });

    return {
      employee_name: dto.employee_name,
      gross_monthly_income: roundToTwoDecimals(grossSalary),
      monthly_income_tax: roundToTwoDecimals(monthlyTax),
      net_monthly_income: roundToTwoDecimals(netIncome),
    };
  }

  async findAll(): Promise<Payslip[]> {
    return this.payslipRepo.find();
  }
}
