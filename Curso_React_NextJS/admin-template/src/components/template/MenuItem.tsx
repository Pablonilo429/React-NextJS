import Link from "next/link"

interface MenuItemProps{
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (ev: any) => void
}

export default function MenuItem(props:MenuItemProps){
    function renderizarLink(){
        return(
            <a className={`flex flex-col justify-center items-center w-20 h-20 ${props.className}`}> 
                    {props.icone}
                    <span className={"text-xs font-light "}>
                        {props.texto}
                    </span>
                </a>
        )
    }
    return(
        <li onClick={props.onClick} className={"hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-950"}>
            {props.url? ( 
            <Link legacyBehavior href={props.url}>
                {renderizarLink()}
            </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}