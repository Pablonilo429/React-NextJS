export default function Filho(props){
    return(
        <div style={{display:"flex", alignItems:"center"}}>
            <h1>{props.nome}</h1>
            <h2>{props.familia}</h2>
        </div>

    )

}