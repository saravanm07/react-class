import React from 'react'

export default function Contact_sdgs() {
  return (
    <div style={{backgroundImage:"url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg')",height:"500px"}}>
           
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
        <h1 className="text-danger mt-5">Contact</h1>
      <div className="d-flex">
        <h1>Mail ID:-</h1>
        <button className="btn btn-warning ms-2">Saravanmohan07@gmail.com</button>
        </div>
        <div className=" m-2">
        <h1>Help-line</h1>
        <button className="btn btn-primary ms-2">+91-9585133002</button>
        </div>
        


    

    </div>
   </div>
  )
}
