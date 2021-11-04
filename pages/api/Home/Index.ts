// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  res: string
}

const getUserTasks = async (username: string): Promise<any> => {

}
export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {

  let userName: string = request.body.username;
  let method: string = request.body.method;

  if(method === 'getTasks') {
    let userTasks = await getUserTasks(userName);

    response.status(200).send({res: userTasks});
  }
  
}