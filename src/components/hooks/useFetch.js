//custom hooks - function

import { useEffect, useState } from "react"

const useFetch =(url)=>{ //url is the address of dstination from where data is taken

    const [data,setData] = useState(null)
    //calls the fetch when the page loads
    useEffect(()=>{ //useEffect i sued cz we need to make an api call on loading pf page
        //fetch return promise
        fetch(url).then(res=>{
            //.json() to remove unnecessory data
            res.json().then(result=>{
                setData(result.products)
            })
        })
    },[])
    return data
}

export default useFetch;