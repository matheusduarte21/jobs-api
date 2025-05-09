import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { PrismaService } from 'src/prismaService/prisma.service';

@Injectable()
export class VacancyService {
  
    constructor(private readonly prisma: PrismaService) {}
  
     async create(createUserDto: CreateVacancyDto){
          const Vacancy = this.prisma.user.create({
              data: createUserDto
          });
  
          return {
              message: "Vacancy created successfully",
              Vacancy
          }
      }
}
