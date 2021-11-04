// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

type Data = {
  res: string
}

export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {
    let userName: string = request.body.username;

    if(!userName || userName === "") response.status(400);

    let prismaClient = new PrismaClient();
    await prismaClient.user.create({
        data:{
            username: userName.toString(),
            tasks: undefined
        }
    });
    response.status(200);
}