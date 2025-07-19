import { useState } from "react";

function EstiloDinamico(){
    const [cor, setCor] = useState('lightblue')

    function trocarCor(){
        setCor(cor === 'lightblue' ? 'lightgreen' : 'lightblue')
    }

    return(
        <div
         style={{
            backgroundColor: cor,
            padding: "20px",
            textAlign: "center",
            color: "#333333",
            borderRadius: "8px",
            fontWeight: "bolder"}}>

                
            <p>A cor de fundo é {cor}</p>
            <button onClick={trocarCor}>Trocar</button>
        
        </div>
    )
}

export default EstiloDinamico