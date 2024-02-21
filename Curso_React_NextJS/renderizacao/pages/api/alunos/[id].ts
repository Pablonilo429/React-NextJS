// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number,
    nome:string,
    email:string,
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {

    const id:number = +req.query.id
    res.status(200).json({id: +id, nome:`Pablo de Oliveira - ${id}`, email:`pablo@gmail.com - ${id}` });
}
