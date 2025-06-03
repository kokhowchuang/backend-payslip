import { ApiProperty } from '@nestjs/swagger';

export class GeneratePayslipDto {
  @ApiProperty()
  employee_name: string;

  @ApiProperty()
  annual_salary: number;
}
