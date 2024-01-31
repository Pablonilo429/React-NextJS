import { useState } from "react"

export default function contador(){
    const [x, alterarX] = useState(0)
  
    
    const estilo = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#222",
        color:"#fff",
        height:"100vh"
    }

    function Incremente(){
        alterarX(x+1) 
    }

    function Decremente(){
        alterarX(x-1)
    }

    return(
        <div style={estilo}>
            <button onClick={Incremente}>Incremente X</button>
            <button onClick={Decremente}>Decremente X</button>
            <span>valor de X: {x}</span>
            
        </div>

    )

}