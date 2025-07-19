import { useState } from "react";

function CampoSenha(){
    const [visivel, setVisivel] = useState(true)
    return(
        <div>
            <input type={visivel ? "text" : "password"} />
            <button onClick={()=>{setVisivel(!visivel)}}>
                {visivel ? "Ocultar" : "Mostrar"}
            </button>
        </div>
    )
}

export default CampoSenha