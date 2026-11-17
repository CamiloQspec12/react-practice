import { useState } from "react"
import s from "./ExpenseList.module.css" 


const initialForm = { type: '', value: '', category: '' }


function ExpenseForm ( { onAdd } ) {

    const [ form, setForm ] = useState(initialForm) 
    const [ errors, setErrors] = useState({})


    function validate(){
        
        const newErrors = {}

        if( !form.type || !form.type.trim() ){
            newErrors.type = 'El campo tipo no puede estar vacio'
        }

        if(!form.value ||  Number.isNaN(Number(form.value))  || Number(form.value) <= 0){
            newErrors.value = 'el valor tiene que ser un numero'
        }

        if(!form.category){
            newErrors.category = 'la categoria no puede estar vacia'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }


     function handleSubmit(e){
        e.preventDefault()

        if(!validate()) return
         
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
                <span>{errors.type}</span>
            </div>
                <div>
                <input placeholder="Precio" name="value" value={form.value} onChange={handleChange} />
                <span>{errors.value}</span>
            </div>
                <div>
                <select name="category" value={form.category} onChange={handleChange} >
                    <option value="">Selecciona una categoria</option>
                    <option value="mercado">Mercado</option>
                    <option value="gusto">Gusto</option>
                    <option value="deuda">Deuda</option>
                </select>
                <span>{errors.category}</span>
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