import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { PrismaService } from 'src/prismaService/prisma.service';

@Injectable()
export class VacancyService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createVacancyDto: CreateVacancyDto, recruiterId: number, companyId: number) {
  const vacancy = await this.prisma.vacancy.create({
    data: {
      title: createVacancyDto.title,
      description: createVacancyDto.description,
      recruiter: {
        connect: {
          id: recruiterId,
        },
      },
      company: {
        connect: {
          id: companyId,
        },
      },
    },
  });

  return {
    message: "Vacancy created successfully",
    vacancy,
  };
}

  async findAll() {
    return this.prisma.vacancy.findMany();
  }
}
