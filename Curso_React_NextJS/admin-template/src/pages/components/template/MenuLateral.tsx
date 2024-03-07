import { IconeAjustes, IconeCasa, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside className="flex flex-col">
            <div className={" flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800"}>
                <Logo></Logo>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}></MenuItem>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}></MenuItem>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}></MenuItem>
            </ul>
        </aside>
    )
}