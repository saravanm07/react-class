import React ,{useState} from "react";
export default function Cap(){
    const[count,setCount]=useState(0)
    const[countt,setCountt]=useState(0)

    return(
        <div >
        
            
                <h1>Bob ate  <span className="text-warning">  {count}  </span> mangoes and <span className="text-warning">{countt}</span>  bananas</h1>
              
            <div className="d-flex">
                <div className="card bg-info m-3" style={{height:"400px",width:"300px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkTlt6-2ra-1aEE9DgNVEvzeR8-ypZEKNGQ&usqp=CAU" style={{height:"300px", width:"300px"}}/>
                <button className="mx-auto my-auto " style={{width:"100PX"}} onClick={()=>(setCount(count+1))}>Mangoes</button>
                </div>

                <div className="card bg-info m-3" style={{height:"400px",width:"300px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIi5jT_m3eV1F0YRc_VQwY-c6WycAYAjDQQ&usqp=CAU" style={{height:"300px", width:"300px"}}/>
                 <button className="mx-auto my-auto" style={{width:"100px"}} onClick={()=>(setCountt(countt+1))}>Bananas</button>
                 </div>
                {/* <button onClick={()=>(setCount(0))}>Reset</button> */}
        </div></div>
    )
}