import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaService/prisma.service';
import { ApplicationsModule } from './applications/applications.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ApplicationsModule, VacancyModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
