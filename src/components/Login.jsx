import { useEffect, useState } from "react"


const initialForm = { email: '', password: '' }



function Login(){
    

    const [ form, setForm ] = useState(initialForm) 

    // useEffect(() => {
        
    // }, [])

    async function login(data){
        try{
            const res = await fetch('https://expensescontrol-backend.onrender.com/api/login', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(data)})
            if(!res.ok) throw new Error(res.status)
            const json = res.json()
            console.log(json, "aqui deberia estar el token")
            localStorage.setItem('token', json)
        } catch(e){
            console.log(e)
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        login({ email: form.email, password: form.password })
        setForm(initialForm)
        return
    }

    function handleChange(e){
        const { name, value } = e.target
        setForm(prev => ({...prev, [name] : value}))
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="email" value={form.email}  onChange={handleChange} />
                <input name="password" value={form.password} onChange={handleChange} />
               <button type="submit">
                    Agregar
                </button>
            </form>
        </>
    )
}

export default Login