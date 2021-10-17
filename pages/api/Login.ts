// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

type Data = {
  res: string
}

export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {

    let userName = request.body.userName;

    console.log(request.body.userName);

    if(!userName || userName === "") response.status(400).json({res: 'false'});

    let prismaClient = new PrismaClient();
    let users = await prismaClient.user.findMany();
    console.log(users);

    if(users && users.length !== 0){
        let userExists = 'false';
        users.forEach((user: databaseObject) => {
          if(user.username === userName) userExists = 'true';
        });
        console.log(`function return ${userExists}`);
        response.status(200).json({res: userExists})
    } 
    else response.status(500).json({res: "NO DATA IN DATABASE"})
}

interface databaseObject {
  id: number,
  username: string
}