import { useState } from "react";

function MostrarText(){

    const [texto, setTexto] = useState('ola')
    const mudar = ()=>{
        setTexto('')
    }

    return(
        <>
            <p>{texto}</p>
            <button onClick={mudar}>Clique aqui</button>
        </>
    )
}

export default MostrarText