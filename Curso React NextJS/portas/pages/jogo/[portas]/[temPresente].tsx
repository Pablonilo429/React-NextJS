import PortaModel from "../../../model/porta";
import Porta from "../../../components/Porta"
import { useEffect, useState } from "react";
import React from "react";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import style from "../../../styles/Jogo.module.css"
import Link from "next/link";
import { useRouter } from "next/router"

export default function jogo(){
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdePortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas


        setValido(qtdePortasValidas && temPresenteValido)
        
    }, [portas])
    
    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query]) 

    function renderizarPortas(){
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} 
            onChange={novaPorta =>setPortas( atualizarPortas(portas, novaPorta))}/> 
        })
    }

    return (
        <div id={style.jogo}>
            <div className={style.portas}> 
                {valido ?
                    renderizarPortas() :
                    <h2>VALORES INVÁLIDOS!!</h2>
                }
            </div>
            <div className={style.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>

            </div>
        </div> 
    );
}