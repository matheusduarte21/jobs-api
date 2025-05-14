// create-vacancy.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateVacancyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  companyId: number;
}