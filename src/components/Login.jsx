import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import s from './Login.module.css'

const initialForm = { email: '', password: '' }



function Login(){
    

    const [ form, setForm ] = useState(initialForm) 
    const [ errors, setErrors] = useState({})
    const [ error, setError] = useState('')

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    function validate(){
        const newErrors = {}

        if(!form.email || !form.email.trim() ){
            newErrors.email = 'El campo correo es obligatorio'
        }

        if(!form.password || form.password.trim().length <= 6){
            newErrors.password = 'El campo contrasena tiene que tener mas de 6 caracteres'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }


    async function login(data){

        try{
            if(!validate()) return
            setLoading(true)
            const res = await fetch('https://expensescontrol-backend.onrender.com/api/login', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(data)})
            if(!res.ok) throw new Error(res.status)
            const json = await res.json()
            localStorage.setItem('token', json.token)
            navigate('/')
        } catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }


    async function handleSubmit(e){
        e.preventDefault()
        await login({ email: form.email, password: form.password })
        return
    }

    function handleChange(e){
        const { name, value } = e.target
        setForm(prev => ({...prev, [name] : value}))
    }



    return (
        <>
            { loading ?  <p>Cargando....</p> : error ? <p>{error} </p> : 
            <form className={s.formButtons} onSubmit={handleSubmit}>
                <input name="email" value={form.email}  onChange={handleChange} />
                <span> { errors.email } </span>
                <input name="password" value={form.password} onChange={handleChange} />
                <span> { errors.password } </span>
               <button type="submit">
                    Agregar
                </button>
            </form>   
            }
        </>
    )
}

export default Login