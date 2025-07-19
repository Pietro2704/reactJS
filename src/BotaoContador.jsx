import { useState } from 'react'

function BotaoContador(){
    const [contador, setContador] = useState(0)
    const incrementar = ()=>{
        setContador(contador + 1)
    }

    const decrementar = ()=>{
        setContador(contador - 1)
    }

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </>
    )
}

export default BotaoContador