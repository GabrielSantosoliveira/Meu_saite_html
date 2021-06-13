import { useState } from 'react'


function Home(){
    return (
        <div>
            <h1>home</h1>
            <Contador />
        </div>
    )
}
function Contador(){  
    const[ contador ,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{Contador }</div>
            <button onClick={adicionarContador}>adicinar</button>
        </div>
    )
}

export default Home