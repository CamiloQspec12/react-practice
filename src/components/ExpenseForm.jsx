import { useState } from "react"
import s from "./ExpenseList.module.css" 


function ExpenseForm () {

    const [ form, setForm ] = useState({ type: '', value: '', category: '' }) 


     function handleSubmit(e){
        e.preventDefault()
    }

    function handleChange(e){
        const { name, value } = e.target
        setForm( prev => ({...prev, [name]: value}))
    }


    return (
        <form className={s.rowForm} onSubmit={handleSubmit}>
            <div>
                <input name="type" value={form.type} onChange={handleChange} />
                <span>{form.type}</span>
            </div>
                <div>
                <input name="value" value={form.value} onChange={handleChange} />
                <span>{form.value}</span>
            </div>
                <div>
                <input name="category" value="hola" onChange={handleChange} />
                <span>{form.category}</span>
            </div>
            <div className={` ${ s.buttonsRow } `}>
                <button type="submit" className={s.button}>
                    Agregar
                </button>
            </div>
        </form>
    )
}


export default ExpenseForm