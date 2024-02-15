function gerarLista(final = 10) {
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function lista(){
    return(
        <div>
            <div>
                {gerarLista(30)}
            </div>

            <div>
                {gerarLista(100)}
            </div>
        </div> 
    )

}