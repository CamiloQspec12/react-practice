import { useState } from "react"
import ExpenseCard from "./ExpenseCard"
import s from "./ExpenseList.module.css" 



function ExpensesList () {

    const [expenses, setExpenses] = useState([{ id: 1, type: 'Zapatos', value: 1500, category: 'Gusto'}, { id: 2, type: 'Comida semana', value: 500, category: 'Mercado'}, { id: 3, type: '', value: 600, category: 'Bills'} ])

    const isEmpty = expenses.length === 0


    function agregarDato () {
        setExpenses( prev => [...prev, { id: Date.now(), type: 'datod sdada', value: 2500, category: 'Gusto'}] )
    }

    function eliminarDato (itemId) {
        console.log(itemId)
        setExpenses( prev => prev.filter(e => e.id !== itemId))
    } 


    return (
        
        <div style={{ marginTop: 50, borderTop: 'solid', borderColor: 'black', borderWidth: 5, paddingTop: 20  }}>
            <div className={` ${ s.buttonsRow } `}>
                <button className={s.button} onClick={agregarDato}>
                    Agregar
                </button>
            </div>
            { !isEmpty ? expenses.map(e=> (
                    <ExpenseCard key={e.id} itemId={e.id} type={e.type} value={e.value} category={e.category} onDelete={eliminarDato}></ExpenseCard>
            )) : <p>No tienes gastos creados </p> }
        </div>
    )
}

export default ExpensesList