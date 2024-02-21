import Image from "next/image";
import { Inter } from "next/font/google";
import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Amarelo"),
  RespostaModel.certa("Azul"),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  

  function respostaFornecida(indice:number){
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div style={{display:"flex", height: "100vh", justifyContent:"center", alignItems:"center"}}>
      <Questao valor={questao} respostaFornecida={respostaFornecida}></Questao>
      </div>
  );
}
