import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prismaService/prisma.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto){

        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);

        const newUser = this.prisma.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword
            }
        });

        return {
            message: "User created successfully",
            newUser
        }
    }
}