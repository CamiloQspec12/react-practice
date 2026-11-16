import { useState } from "react"
import s from "./ExpenseList.module.css" 


const initialForm = { type: '', value: '', category: '' }


function ExpenseForm ( { onAdd } ) {

    const [ form, setForm ] = useState(initialForm) 


    function validate(){
        
    }


     function handleSubmit(e){
        e.preventDefault()

         if(!validate()) 

        onAdd({ type: form.type, value: Number(form.value), category: form.category })
        setForm(initialForm)
    }

    function handleChange(e){
        const { name, value } = e.target
        setForm( prev => ({...prev, [name]: value}))
    }




    return (
        <form className={s.rowForm} onSubmit={handleSubmit}>
            <div>
                <input placeholder="Tipo" name="type" value={form.type} onChange={handleChange} />
                <span>{form.type}</span>
            </div>
                <div>
                <input placeholder="Precio" name="value" value={form.value} onChange={handleChange} />
                <span>{form.value}</span>
            </div>
                <div>
                <select name="category" value={form.category} onChange={handleChange} >
                    <option value="">Selecciona una categoria</option>
                    <option value="mercado">Mercado</option>
                    <option value="gusto">Gusto</option>
                    <option value="deuda">Deuda</option>
                </select>
                <span>{form.category}</span>
            </div>
            <div className={` ${ s.buttonsRow } `} >
                <button type="submit" className={s.button}>
                    Agregar
                </button>
            </div>
        </form>
    )
}


export default ExpenseForm