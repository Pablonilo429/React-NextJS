import { embaralhar } from "@/functions/arrays";
import questoes from "../bancoDeQuestoes"
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse,) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))

}