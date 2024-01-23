import { faShip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
function Home(){
    return(
        <div>
            <h1 className="heading">Home page</h1>
            <p>welcome to home page</p>
            <div className="card bg-info " style={{height:"200px", width:"220px"}}>
            <img className="rounded-circle " src="https://img.freepik.com/free-vector/new-year-background-with-golden-ribbon_23-2147695372.jpg?w=740&t=st=1704016536~exp=1704017136~hmac=cb653d3c7be4605cfa046a0f81af3db96756f75ed29a0a285957f1c4a02f725e" style={{height:"200px",width:"200px"}}/>
            </div></div>
    )
}
function Product(){
    return(
        <div>
            <ul className="text-warning">
                <li>mobile</li>
                <li>charger</li>
                <li style={{color:"blue",backgroundColor:"red"}}>temper glass</li>
            </ul>
             <FontAwesomeIcon icon={faShip} style={{height:"300px"}} ></FontAwesomeIcon>
            

        </div>
    )
}
function Nav(){
    return(
        <div className="first">
           
    <p style={{textAlign:"center",
    fontFamily:"serif",textTransform:"uppercase",backgroundColor:"purple"}}
    >shop</p>
    </div>
)
}
export default Home
export {Product,Nav}
