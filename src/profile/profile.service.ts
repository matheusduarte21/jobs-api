import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { PrismaService } from 'src/prismaService/prisma.service';

@Injectable()
export class ProfileService {

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProfileDto, userId: number) {

    const newProfile = this.prisma.profile.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });

    return {
      message: "Profile created successfully",
      newProfile
    }

  }

}
