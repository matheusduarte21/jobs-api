import { IsInt, IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import  ApplicationStatus  from '@prisma/client';

export class CreateApplicationDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  vacancyId: number;

  @IsString()
  @IsOptional()
  status: any;
}