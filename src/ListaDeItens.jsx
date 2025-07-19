import { useState } from 'react'

function ListaDeItens() {

    const [itens, setItens] = useState([])
    const [novoItem, setNovoItem] = useState('')

    const adicionarItem = () => {
        if(novoItem.trim() !== ''){
            setItens([...itens, novoItem])
            setNovoItem('')
        }else{
            setNovoItem('Escreva alguma coisa')
        }
    }

    return (
        <>
            <h2>Lista</h2>
            <input type="text" placeholder="Digite um item" value={novoItem} onChange={(e)=>{setNovoItem(e.target.value)}} />

            <button onClick={adicionarItem}>Adicionar</button>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ListaDeItens