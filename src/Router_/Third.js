import React,{useState} from 'react'

export default function Third() {
  const [num,incnum]=useState(0)
  function incbtn(){
    incnum(num++)
  }
  return (
    <div>
      <div className="card bg-success  m-5" style={{height:"100px",width:"300px", textAlign:"center"}}>
        <div className="">
      <h1 style={{}}>0</h1>
      <button classNamestyle={{marginLeft:"5px"}}  onClick={(incnum)}>Increment</button>
      <button style={{marginLeft:"5px", backgroundColor:"pink"} }>Decrement</button>
      <button style={{marginLeft:"5px", backgroundColor:"silver"}}>Re-set</button>
    </div>
    </div>
    </div>
    

  )
}
