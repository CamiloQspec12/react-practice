import { useState } from "react";


function Counter (){

    const [counter, setCounter] = useState(1);


    console.log(counter)


    return (
        <button onClick={ () => setCounter( counter * 2 )} style={{ padding: 10, width: 150, marginTop: 10 }} >
            Click { counter }
        </button>
    )

}


export default Counter