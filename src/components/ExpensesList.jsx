import { useState } from "react"
import ExpenseCard from "./ExpenseCard"


function ExpensesList () {

    const [expenses, setExpenses] = useState([{ id: 1, type: 'Zapatos', value: 1500, category: 'Gusto'}, { id: 2, type: 'Comida semana', value: 500, category: 'Mercado'}, { id: 3, type: '', value: 600, category: 'Bills'} ])


    return (
        <div style={{ marginTop: 50, borderTop: 'solid', borderColor: 'black', borderWidth: 5, paddingTop: 20  }}>
            { expenses.map(e=> (
                <div key={e.id}>
                    <ExpenseCard type={e.type} value={e.value} category={e.category} ></ExpenseCard>
                </div>
            ) ) }
        </div>
    )
}

export default ExpensesList