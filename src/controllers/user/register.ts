import { User } from "@prisma/client"
import { FastifyReply, FastifyRequest  } from "fastify"
import { z } from "zod"
import { prisma } from "../../lib/prisma "

export async function Register(request: FastifyRequest, reply: FastifyReply){
    const RegisterBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })
    
    const {name, email, password} = RegisterBodySchema.parse(request.body)

    await prisma.user.create({
        data: {
            name, 
            password,
            email
        }
    })
    
}