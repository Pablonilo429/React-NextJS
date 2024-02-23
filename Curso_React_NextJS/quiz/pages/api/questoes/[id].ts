// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questoes from "../bancoDeQuestoes";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const idSelecionado = +req.query.id
    
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)
    
    if(unicaQuestaoOuNada.length === 1){
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        const obj = questaoSelecionada.toObject()
        res.status(200).json(obj)
        
    }else{
        res.status(204).send()
    }

    res.status(200).json(questoes[0].toObject());
}
