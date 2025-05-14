import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prismaService/prisma.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);

    const userData = {
      name: createUserDto.name,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: hashedPassword,
    };

    if (createUserDto.role) {
      userData['role'] = createUserDto.role;
    }

    const newUser = await this.prisma.user.create({
      data: userData
    });

    return {
      message: "Usuário criado com sucesso",
      user: {
        id: newUser.id,
        name: newUser.name,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role
      }
    };
  }
}