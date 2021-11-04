import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

type Data = {
  res: string
}

export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {
    let task: NewTask = JSON.parse(request.body.task);
    let title = task.title;
    let prismaClient = new PrismaClient();
    await prismaClient.task.create({
        data: {
            userId: 2332,
        }
    });
    response.status(200);
}

interface NewTask {
    title: string,
    description: string,
    urgency: string,
    dueDate?: string
}