import Image from "next/image";
import { Inter } from "next/font/google";
import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useEffect, useState } from "react";
import Temporizador from "@/components/Temporizador";
import Botao from "@/components/Botao";
import Questionario from "@/components/Questionario";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Amarelo"),
  RespostaModel.certa("Azul"),
])

const BASE_URL = "http://localhost:3000/api"

export default function Home() {

  const router = useRouter()

  const [idsQuestoes, setIdsQuestoes] =useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsQuestoes(){
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    setIdsQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao:number){
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }
  
  useEffect(() => {
    carregarIdsQuestoes()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    
  }

  function idProximaPergunta(){
    if(questao){
      const proximoIndice = idsQuestoes.indexOf(questao.id) + 1
      return idsQuestoes[proximoIndice]
    }
    
  }

  function proximoPasso(){
    const proximoId = idProximaPergunta()
    proximoId ? proximaQuestao(proximoId) : finalizar()
  }

  function proximaQuestao(proximoId:number){
    carregarQuestao(proximoId)
  }

  function finalizar(){
    router.push({
      pathname:"/resultado",
      query:{
        total: idsQuestoes.length,
        certas: respostasCertas
      }
    })

  }


  return (
    <Questionario 
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      proximoPasso={proximoPasso}
    ></Questionario>
  );
}
