import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { PrismaService } from 'src/prismaService/prisma.service';


@Injectable()
export class ApplicationsService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createApplicationDto: CreateApplicationDto) {

    const alreadyApplied = await this.prisma.application.findFirst({
      where: {
        userId: createApplicationDto.userId,
        vacancyId: createApplicationDto.vacancyId,
      },
    });

    if (alreadyApplied) {
      throw new BadRequestException('Você já se candidatou a essa vaga');
    }
    
    const newApplication = this.prisma.application.create({
      data: createApplicationDto
    });

    return {
      message: "Aplicação criada com sucesso",
      newApplication
    }
  }

  async findAllMyApplication(userId: number) {
    return this.prisma.application.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        vacancy: {
          select: {
            id: true,
            title: true,
            description: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
