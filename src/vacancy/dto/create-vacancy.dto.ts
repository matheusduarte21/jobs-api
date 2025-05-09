import { 
    IsString, 
    IsNotEmpty, 
    IsInt, 
    MinLength, 
    MaxLength,
    IsOptional,
    IsDateString
  } from 'class-validator';
  
  export class CreateVacancyDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5, { message: 'Title must be at least 5 characters long' })
    @MaxLength(100, { message: 'Title cannot be longer than 100 characters' })
    title: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(20, { message: 'Description must be at least 20 characters long' })
    @MaxLength(2000, { message: 'Description cannot be longer than 2000 characters' })
    description: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Company name must be at least 2 characters long' })
    @MaxLength(100, { message: 'Company name cannot be longer than 100 characters' })
    company: string;
  
    @IsInt()
    @IsNotEmpty()
    recruiterId: number;
  
    @IsDateString()
    @IsOptional()
    createdAt?: Date;
  }