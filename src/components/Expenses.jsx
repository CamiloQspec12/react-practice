import { useEffect, useState } from "react"
import ExpenseCard from "./ExpenseCard"
import { useNavigate } from "react-router-dom"

function Expenses() {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState('')

    const navigate = useNavigate()



    useEffect(() => {

    getData()

    }, [])



    
    async function getData(){
        try{
            const storage = localStorage.getItem('token')
            const res = await fetch('https://expensescontrol-backend.onrender.com/api/expenses', {
                headers: { Authorization: `Bearer ${storage}` }
            })
            if(!res.ok){
                if(res.status == 401){
                    navigate('/login')
                    localStorage.removeItem('token')
                }
                throw new Error('Error al conectar con el servidor...')
            }  
            const json = await res.json()
            setData(json)

        } catch(e){
            setError(e.message)
        }
        finally{
            setLoading(false)            
        }
    }




    return (
        <>
        { loading ? <p>Cargando....</p> : error ? <p>{error}</p> : data.map( e => (
            <ExpenseCard key={e.id} itemId={e.id} type={e.type} value={e.value} category={e.category?.name} />
        )) }
        </>
    )
}


export default Expenses