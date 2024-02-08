import { useEffect, useState } from "react"

export default function questao(){
    const [questao, setQuestao] = useState(null)

    useEffect(()=> {
        fetch("http://localhost:3000/api/questao/22")
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])
    
    function renderizarRespostas(){
        if(questao){ 
            return questao.respostas.map(resp => {
                return <li>{resp}</li>
            })
        }
        return false
    }

    return(
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}