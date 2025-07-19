import { useState } from "react"

function Tabuada({inicio = 1, fim = 10 }) {

    const [input, setInput] = useState(0)
    const resultados = []

    for (let i = inicio; i <= fim; i++) {
        resultados.push(
            <li key={i}>{input} X {i} = {input * i}</li>
        )
    }

    return (
        <>
            <input 
            type="number" 
            onChange={(evento) => {setInput(evento.target.value)}} />
            <ul>{resultados}</ul>
        </>
    )
}

export default Tabuada