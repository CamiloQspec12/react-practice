
import s from './ExpenseCard.module.css'
import ss from './ExpenseList.module.css'

function ExpenseCard({ value, type = 'Sin tipo', category = 'Sin categoria', itemId, onDelete }){



    return (
        <>
            <div className={`${s.amount}`}>
                <p className={`${value > 100 ? s.low : s.high}`}>{value.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}</p>
                <p>{type || 'Sin tipo....'}</p>
                <p>{category}</p>
                <button className={ss.button} onClick={() => onDelete(itemId)}>
                    Eliminar
                </button>
            </div>
        </>
    )
}


export default ExpenseCard