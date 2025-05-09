import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createApplicationDto: CreateApplicationDto, @Req() req: Request) {

    if (!req.user) {
      throw new UnauthorizedException('Usuário não autenticado');
    }
    const userId = req.user['sub']
    createApplicationDto.userId = userId;
    return this.applicationsService.create(createApplicationDto);
  }

  @Get('my-applications')
  @UseGuards(AuthGuard('jwt'))
  findAllMyApplication(@Req() req: Request) {

    if (!req.user) {
      throw new UnauthorizedException('Usuário não autenticado');
    }
    const userId = req.user['sub']
    return this.applicationsService.findAllMyApplication(userId);
  }
}
