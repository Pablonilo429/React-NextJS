import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className={" flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800"}>
                <Logo></Logo>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}></MenuItem>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}></MenuItem>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}></MenuItem>
                
            </ul>
            <ul>
                <MenuItem texto="Sair" icone={IconeSair} onClick={() => console.log("logout")} className={"text-red-600 hover:bg-red-600 hover:text-white"}></MenuItem>
            </ul>
        </aside>
    )
}