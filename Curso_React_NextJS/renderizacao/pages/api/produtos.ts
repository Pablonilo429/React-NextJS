// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

function numeroAleatorio(min:number =1, max:number = 10000){
  return parseInt(Math.random() * (max - min)) + min
}

type Data = {
  id: number,
  nome: string,
  preco: number,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>, // Alterado para aceitar um array de Data
) {
  const data: Data[] = [
    { id: numeroAleatorio(), nome: "Caneta", preco: 5.60 },
    { id: numeroAleatorio(), nome: "Lapiseira", preco: 27.90 },
    { id: numeroAleatorio(), nome: "Borracha", preco: 2.50 },
    { id: numeroAleatorio(), nome: "Lápis", preco: 1.49 },
  ];

  res.status(200).json(data);
}
