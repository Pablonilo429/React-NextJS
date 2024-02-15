import Pessoa from "@/components/Pessoa";
import React from "react";

export default function exemploTS(){
    return(
        <div>
            <Pessoa nome="Pablo" idade={20}/>
            <Pessoa nome="Jade"></Pessoa>
        </div>
    )
}