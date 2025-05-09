import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prismaService/prisma.service";

@Injectable()
export class UserService {
    
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto){
        const newUser = this.prisma.user.create({
            data: createUserDto
        });

        return {
            message: "User created successfully",
            newUser
        }
    }
}