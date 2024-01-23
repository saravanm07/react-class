import React from 'react'


export default function Socialbuttons() {
  return (
    <>
      <div style={{backgroundImage:"url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg')",height:"1000px"}}>
           
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
            <h1 className="text-danger mt-5">Social Buttons</h1>
          <div className="mt-5">
            <button className="btn btn-warning ms-2">like</button>
            <button className="btn btn-light ms-2">comment</button>
            <button className="btn btn-primary ms-2">share</button>


          </div>

        </div>
       </div>

</>
  )
}
