import {useState} from 'react';
function Contador (){

    const [contador,setContador] = useState(0);
    function adicionarContador(){
        setContador(contador+1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>+</button>
        </div>
        
    )}
    export default Contador