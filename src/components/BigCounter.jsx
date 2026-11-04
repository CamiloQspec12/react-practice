import { useState } from "react"
import ExpenseCard from './ExpenseCard'


function handleClick(){
    // console.log("Dentro de la ufnicon handleClick")
}


function BigCounter() {

    const [ count, setCount ] = useState(0)

    const buttonStyle = { padding: 10, width: 150, marginTop: 10  }
    const exmStyle = { width: 100, height: 100, border: 'solid', backgroundColor: 'red', marginTop: 10 }

    const content = <div style={exmStyle}> ejemplo </div>


    const [ cosa, setCosa ] = useState({ type: '', value: 0 })

    const data = [ { id: 1, type: 'Mercado', value: 120, category: 'Comida' },
  { id: 2, type: 'Cine', value: 30, category: 'Ocio' },]

    const [ list, setList ] = useState(data)


    
    const [ isAvailable, setIsAvailable ] = useState(false)

    // console.log(isAvailable)




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
                 <button onClick={ () => setIsAvailable(  !isAvailable ) } style={buttonStyle}>
                    Available
                </button>
            </div>
            { isAvailable ? content : <p>Aja no esta</p> }

            <button onClick={ () => setList( prev => [...prev, { id: Date.now(), type: 'Nuevo', value: 50, category: 'Otros' }] ) } style={buttonStyle}>
                    Agregar card
                </button>

            <button onClick={ () => setList( prev => prev.filter(e => e.id != 1 ) ) } style={buttonStyle}>
                    Eliminar
                </button>



            { list.map( e => (
                <div key={e.id}>
                    <ExpenseCard  type={e.type} value={e.value}   />
                </div>
            )) }

        </>
    )
}

export default BigCounter