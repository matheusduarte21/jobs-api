import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import  Role  from '@prisma/client';


export class CreateUserDto {

  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @MinLength(3, { message: 'O nome deve ter no minimo 3 caracteres' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'O sobrenome é obrigatório.' })
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;

  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  @IsString()
  @IsEnum(Role, { message: 'Invalid role' })
  @IsOptional()
  role: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

}