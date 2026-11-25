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
            setError('')
            const res = await fetch('https://expensescontrol-backend.onrender.com/api/login', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(data)})
            if(!res.ok){
                if(res.status == 401) throw new Error('Credenciales equivocadas')
                throw new Error('Algo salio mal al conectar con el servidor.....')                
            }
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
    }

    function handleChange(e){
        const { name, value } = e.target
        setForm(prev => ({...prev, [name] : value}))
    }



    return (
        <>
            { loading ?  <p>Cargando....</p> : 
            <form className={s.formButtons} onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" value={form.email}  onChange={handleChange} />
                <span> { errors.email } </span>
                <input name="password" type="password" placeholder="Contrasena" value={form.password} onChange={handleChange} />
                <span> { errors.password } </span>
               <button type="submit">
                    Entrar
                </button>
                { error ? <span style={{ marginTop: 10 }}>{error}</span> : '' }
            </form>   
            }
        </>
    )
}

export default Login