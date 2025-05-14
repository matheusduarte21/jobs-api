import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { PrismaModule } from 'src/prismaService/prisma.module';

@Module({
   imports: [PrismaModule], 
  controllers: [VacancyController],
  providers: [VacancyService],
})
export class VacancyModule {}
