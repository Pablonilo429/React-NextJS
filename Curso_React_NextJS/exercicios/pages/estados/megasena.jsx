import { useState } from "react";
import  {mega } from "../../functions/mega";
import NumeroDisplay from "@/components/NumeroDisplay";

export default function megasena(){

    const[qtde, setQtde] = useState(6)
    const[numeros, setNumeros] = useState()

    function renderNumeros(){
        return numeros?.map(numero => <NumeroDisplay key={numero} numero={numero}/>)
    }

    function handleClick(){
        setNumeros(mega(qtde))
    }

    

    return(
        <div style={{display:"flex", alignItems:"center", flexDirection: "column"}} >
            <h1>Mega Sena</h1>
            <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(+ev.target.value)}></input>
                <button onClick={handleClick}>Gerar Aposta</button>
            </div>
        </div>
    )

}