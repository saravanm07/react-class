import React,{useState} from 'react'

export default function Second() {
  const[count,setCount]=useState(0)
 
  return (
    <div className='card bg-dark '>
    <h1 className='text-center text-white'>{count}</h1>
    <div className='d-flex justify-content-center'>

<button onClick={()=>(setCount(count+1))} className='btn btn-primary m-3'>Increase</button>
<button onClick={()=>(setCount(count-1))} className='btn btn-warning  m-3'>Decrease</button>
<button onClick={()=>(setCount(0))} className='btn btn-primary  m-3'>Reset</button>
    </div>
    </div>
  )
}
