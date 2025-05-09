import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { PrismaService } from 'src/prismaService/prisma.service';

@Injectable()
export class VacancyService {
  
    constructor(private readonly prisma: PrismaService) {}
  
    async create(createUserDto: CreateVacancyDto, recruiterId: number) {
          const Vacancy = this.prisma.user.create({
              data: {
                    ...createUserDto,
                    recruiter: {
                        connect: {
                            id: recruiterId
                        }
                    }
              }
          });
  
          return {
              message: "Vacancy created successfully",
              Vacancy
          }
    }

    async findAll() {
        return this.prisma.vacancy.findMany();
    }
}
