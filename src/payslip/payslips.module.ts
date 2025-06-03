import { Module } from '@nestjs/common';
import { Payslip } from './entity/payslip.entity';
import { PayslipService } from './payslip.service';
import { PayslipController } from './controller/payslip.controller';
import { TaxCalculatorService } from 'src/tax/tax-calculator.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Payslip])],
  providers: [PayslipService, TaxCalculatorService],
  controllers: [PayslipController],
})
export class PayslipsModule {}
