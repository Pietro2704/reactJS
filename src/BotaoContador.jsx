import { useState } from 'react'

function BotaoContador(){
    const [contador, setContador] = useState(0)

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={()=>{setContador(contador + 1)}}>Clique aqui</button>
        </>
    )
}

export default BotaoContador