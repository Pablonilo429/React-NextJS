import PortaModel from "../model/porta";
import Porta from "../components/Porta"
import Presente from "../components/Presente"
import { useState } from "react";
import React from "react";
import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return(
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Joguinhos das portas</h1>
        </Cartao>   
        <Cartao>
          <EntradaNumerica text= "Qtde Portas: " value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}></EntradaNumerica>
        </Cartao>
      </div>
      <div>        
        <Cartao>
          <EntradaNumerica text= "Porta com presente " value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>

  )


}
