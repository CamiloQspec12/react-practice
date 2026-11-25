import { useEffect, useState } from "react"
import ExpenseCard from "./ExpenseCard"

function Expenses() {

    const [ data, setData ] = useState([])


    useEffect(() => {

    getData()

    }, [])

    async function getData(){
        try{
            const storage = localStorage.getItem('token')
            const res = await fetch('https://expensescontrol-backend.onrender.com/api/expenses', {
                headers: { Authorization: `Bearer ${storage}` }
            })
            if(!res.ok) throw new Error('Error al conectar con el servidor...') 
            const json = await res.json()
            console.log(json)
            setData(json)

        } catch(e){
            console.log(e.message)
        }
    }




    return (
        <>
        { data.map( e => (
            <ExpenseCard key={e.id} itemId={e.id} type={e.type} value={e.value} category={e.category?.name} />
        )) }
        </>
    )
}


export default Expenses