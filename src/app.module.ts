import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PayslipsModule } from './payslip/payslips.module';
import { Payslip } from './payslip/entity/payslip.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Payslip],
      synchronize: true,
    }),
    PayslipsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
