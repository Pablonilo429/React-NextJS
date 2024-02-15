export default function Estatico4(){
    return(
        <div>
            <h1>Estático #04</h1>
        </div>
    )
}

// export async function getStaticProps(){
//     const resp = await fetch("http://localhost:3000/api/produtos")
//     const produtos = await resp.json()

//     return{
        
//         props:{
//             produtos
//         }
//     }
// }

// export default function Estatico4(props:any){
    
//     function renderizarProdutos(){
//         return props.produtos.map((produto:any) =>{
//             return(
//                 <li key={produto.id}>{produto.nome} tem preço de R$ {produto.preco}</li>
//             )
//         })
    
    
//     }
    
//     return(
//         <div>
//             <h1>Estático #04</h1>
//             <ul>
//                 {renderizarProdutos()}
//             </ul>
//         </div>
//     )
// }