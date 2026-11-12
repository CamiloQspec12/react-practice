import { useState } from "react"
import ExpenseCard from "./ExpenseCard"
import s from "./ExpenseList.module.css" 
import ExpenseForm from "./ExpenseForm"


function ExpensesList () {

    const [expenses, setExpenses] = useState([{ id: 1, type: 'Zapatos', value: 1500, category: 'Gusto'}, { id: 2, type: 'Comida semana', value: 500, category: 'Mercado'}, { id: 3, type: '', value: 600, category: 'Bills'} ])

    const isEmpty = expenses.length === 0

    const isTotal = expenses.reduce((sum, e) => sum + e.value, 0)

    const bigOnes = expenses.filter(e => e.value > 100).length

    function agregarDato () {
        setExpenses( prev => [...prev, { id: Date.now(), type: 'datod sdada', value: 2500, category: 'Gusto'}] )
    }

   

    function eliminarDato (itemId) {
        setExpenses( prev => prev.filter(e => e.id !== itemId))
    } 


    return (
        
        <div style={{ marginTop: 50, borderTop: 'solid', borderColor: 'black', borderWidth: 5, paddingTop: 20  }}>
            <ExpenseForm></ExpenseForm>
            <h1 className={s.totalValue}>
                {bigOnes} {bigOnes === 1 ? 'gasto' : 'gastos'} mayores a 100
            </h1>
            <h1 className={s.totalValue}>
               <span style={{color:'black'}}>Total </span> {isTotal.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}
            </h1>
            { !isEmpty ? expenses.map(e=> (
                    <ExpenseCard key={e.id} itemId={e.id} type={e.type} value={e.value} category={e.category} onDelete={eliminarDato}></ExpenseCard>
            )) : <p>No tienes gastos creados </p> }
        </div>
    )
}

export default ExpensesList