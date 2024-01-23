import React,{useState,useEffect} from 'react'

export default function Effect() {
    const[product,setproduct]=useState([])
    useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response=>response.json())
    //   .then(data=>{console.log(data)
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{console.log(data)
        setproduct(data)})

    },[])
  return (
    <>
    <div>
        {product.map((e)=>{
    return(
        <div className='shodow bg-info m-5'>
            <h1>{e.title}</h1>
            <img src={e.image} style={{height:"50px"}}/>
            <mark>{e.price}</mark>

        </div>
    )
    
  
})}
</div>
</>
  )
}