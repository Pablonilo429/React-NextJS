export default function Filho(props){
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={
                () => props.funcao("Passei no Enem!", "Uhuu", 10)
            }>Falar com o Pai #02
            </button>
        </div>
    )
}