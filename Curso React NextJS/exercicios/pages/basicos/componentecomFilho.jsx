import Lista from "@/components/Lista";
import Item from "@/components/Item"

export default function componentecomFilho(){
    return(
        <div>
            <Lista>
                <Item conteudo="item 11"> </Item>
                <Item conteudo="item 12"> </Item>
                <Item conteudo="item 13"> </Item>
            </Lista>
        </div>

    )
}