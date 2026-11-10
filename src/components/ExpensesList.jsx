import { useState } from "react"
import ExpenseCard from "./ExpenseCard"




function ExpensesList () {

    const [expenses, setExpenses] = useState([{ id: 1, type: 'Zapatos', value: 1500, category: 'Gusto'}, { id: 2, type: 'Comida semana', value: 500, category: 'Mercado'}, { id: 3, type: '', value: 600, category: 'Bills'} ])

    const valid = expenses.length == 0


    return (
        <div style={{ marginTop: 50, borderTop: 'solid', borderColor: 'black', borderWidth: 5, paddingTop: 20  }}>
            { !valid ? expenses.map(e=> (
                    <ExpenseCard key={e.id}  type={e.type} value={e.value} category={e.category} ></ExpenseCard>
            )) : <p>No tienes gastos creados </p> }
        </div>
    )
}

export default ExpensesList