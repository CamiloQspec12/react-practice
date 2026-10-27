import { useState } from "react"


function handleClick(){
    console.log("Dnetro de la ufnicon handleClick")
}


function BigCounter() {

    const [ count, setCount ] = useState(0)

    const buttonStyle = { padding: 10, width: 150, marginTop: 10  }

    const [ cosa, setCosa ] = useState({ type: '', value: 0 })


    console.log(cosa)



    return (
        <>
            <p> {count} </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                <button onClick={ () => setCount( count + 1) } style={buttonStyle}>
                    +
                </button>
                <button onClick={ () => setCount( count - 1) } style={buttonStyle}>
                    -
                </button>
                <button onClick={ () => setCount( 0 ) } style={buttonStyle}>
                    Reset
                </button>
                <button onClick={ () => {
                    setCount( c => c + 1 )  
                    setCount( c => c + 1 ) 
                    setCount( c => c + 1 )
                }  } style={buttonStyle}>
                    +3
                </button>
            </div>
            <p style={{marginTop: 10}}>  <span> {cosa.type}</span> <span> {cosa.value}</span> </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 10,  }}>
                <button onClick={ () => setCosa( {...cosa, type : "Nuevo valor" }) } style={buttonStyle}>
                    Change type
                </button>
                <button onClick={ () => setCosa( e => ({...cosa, value : e.value + 10 }) )  } style={buttonStyle}>
                    Change value
                </button>
                <button onClick={ () => {
                    cosa.value = 10
                    setCosa(cosa)
                }} style={buttonStyle}>
                    Test!!!
                </button>
                 <button onClick={ handleClick() } style={buttonStyle}>
                    handle
                </button>
            </div>

        </>
    )
}

export default BigCounter