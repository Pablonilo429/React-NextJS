export async function getStaticPaths(){
    const resp:any = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids: any = await resp.json()

    const paths:any = ids.map((id:any) => {
        return {params: {id: `${id}`}}
    })
    
    return{
        fallback: true,
        paths:paths
    }
}

export async function getStaticProps(context:any){
    const resp:any = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno:any = await resp.json()

    return{
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props:any){
    const {aluno}:any = props
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {aluno ?
                <ul>
                    <li>ID: {aluno.id}</li>
                    <li>Nome: {aluno.nome}</li>
                    <li>Email: {aluno.email}</li>
                </ul>
                :false
            }
        </div>
    )
}