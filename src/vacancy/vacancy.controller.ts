import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createVacancyDto: CreateVacancyDto, @Req() req: Request) {

    if (!req.user) {
      throw new Error('Usuário não autenticado');
    }
    const userId = req.user['sub'];
    return this.vacancyService.create(createVacancyDto,userId );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.vacancyService.findAll();
  }
  
}
