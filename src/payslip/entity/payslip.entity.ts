import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Payslip {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  time_stamp: Date;

  @Column()
  employee_name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  annual_salary: number;

  @Column('decimal', { precision: 10, scale: 2 })
  monthly_income_tax: number;
}