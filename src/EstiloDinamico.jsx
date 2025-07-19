import { useState } from "react";

function EstiloDinamico(){

    const [cor, setCor] = useState('lightblue')

    function trocarCor(){
        setCor(cor === 'lightblue' ? 'lightgreen' : 'lightblue')
    }

    return(
        <div style={{
            backgroundColor: cor
        }}>
            <p>A cor de fundo é {cor}</p>

            <button onClick={trocarCor}>Trocar</button>
        
        </div>
    )
}

export default EstiloDinamico