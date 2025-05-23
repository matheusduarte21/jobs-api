import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaModule } from 'src/prismaService/prisma.module';

@Module({
  imports: [PrismaModule], 
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
