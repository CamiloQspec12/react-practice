import { useState, useEffect } from "react"
import s from "./PostList.module.css"

function PostList(){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')


    


    useEffect(()=> {
       
        async function load(){
            try{
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
            <div className={`${s.containerPost}  ${ loading || error ? s.centerContent : '' } `}>
                
                {  loading ?  <h1>Cargando...</h1> : error ? <h1>{error}</h1> :  data.map( e => (
                    <div key={e.id} className={s.post}>
                        <h1> { e.title } </h1>
                        <p> { e.body} </p>
                    </div>
                ))  }
            </div>
        </>
    )
}


export default PostList