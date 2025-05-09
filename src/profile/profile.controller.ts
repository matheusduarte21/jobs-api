import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createProfileDto: CreateProfileDto,  @Req() req: Request) {

    if (!req.user) {
      throw new Error('Usuário não autenticado');
    }

    const userId = req.user['sub'];
    return this.profileService.create(createProfileDto, userId);
  }

}
