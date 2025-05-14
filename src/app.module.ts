import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApplicationsModule } from './applications/applications.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prismaService/prisma.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    ApplicationsModule,
     UserModule,
      VacancyModule,
       ProfileModule,
        PrismaModule,
         AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
