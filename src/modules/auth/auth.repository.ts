import { prisma } from "../../lib/prisma";

export class AuthRepository {
    async findByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email },
        })
    }

    async create(data: 
        { username: string; 
        email: string; 
        password: string }) {
            return prisma.user.create({
                data,
            })
        }
}