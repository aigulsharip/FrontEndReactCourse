import { useState } from "react";

function Counter() {
    //let num = 0;
    // useState
    const [num, setNum] = useState(0)
    
    function increseCounter() {
        setNum(num +1);
    }
    
    return (
        <>
            <h1 id = "counter">{num}</h1>
            <button id = "btn" onClick ={ 
                () => increseCounter()
            } >Increment by 1</button>

        </>
    )
}

export default Counter;