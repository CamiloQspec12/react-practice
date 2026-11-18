import { useState, useEffect } from "react"
import s from "./PostList.module.css"

function PostList(){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=> {
       
        async function load(){
            try{
                setLoading(true)
                const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                if(!res.ok) throw new Error( res.status )
                const json = await res.json()
                setData(json)
            }catch(e){
                setError(e.message)
            }finally{
                setLoading(false)
            }
        }
        load()
    }, [])



    return (
        <>
            <div className={s.containerPost}>
                {  data.map( e => (
                    <div key={e.id} className={s.post} >
                        <h1> { e.title } </h1>
                        <p> { e.body} </p>
                    </div>
                )) }
            </div>
        </>
    )
}


export default PostList