import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeneratePayslipDto } from '../dto/generate-payslip.dto';
import { PayslipService } from '../payslip.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('payslip')
export class PayslipController {
  constructor(private readonly payslipService: PayslipService) {}

  @Post()
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({ type: GeneratePayslipDto })
  generate(@Body() dto: GeneratePayslipDto) {
    return this.payslipService.generate(dto);
  }

  @Get()
  findAll() {
    return this.payslipService.findAll();
  }
}
