
import s from './ExpenseCard.module.css'


function ExpenseCard({ value, type, category = 'Sin categoria'  }){
    return (
        <>
            <div className={`${s.amount}`}>
                <p className={`${value > 100 ? s.low : s.high}`}>{value.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}</p>
                <p>{type}</p>
                <p>{category}</p>
            </div>
        </>
    )
}


export default ExpenseCard