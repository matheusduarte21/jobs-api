import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; 
import { PrismaService } from './prismaService/prisma.service';
import { ApplicationsModule } from './applications/applications.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ApplicationsModule, VacancyModule, ProfileModule,
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
