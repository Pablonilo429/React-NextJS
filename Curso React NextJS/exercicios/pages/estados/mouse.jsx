import { useState } from "react"

export default function mouse(){
    const [x, alterarX] = useState(0)
  
    const [y, alterarY] = useState(0)
    
    
    const estilo = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#222",
        color:"#fff",
        height:"100vh"
    }

    function quandoMover(ev){
        alterarX(ev.clientX)
        alterarY(ev.clientY)

    }

    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>

    )
}