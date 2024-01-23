import React, { useState } from 'react'

export default function Product_sdgs() {
  const [count, setCount] = useState(0)
  const [countt, setCountt] = useState(0)
  const [counttt, setCounttt] = useState(0)
  const [counttt1, setCounttt1] = useState(0)

  return (
    <div >
      <div className="d-flex">
        <div className="card mx-auto bg-primary " style={{ height: "460px", width: "300px" }}>
          <img src="https://img.freepik.com/premium-photo/sunset-solar-energy-farm-plant_88235-3463.jpg?w=900" style={{ height: "300px", width: "300px" }} />
          <h1 className='mx-auto '>Industrial</h1>
          <div className='mx-auto'>
            <button className="m-2 btn btn-dark" style={{ width: "100PX" }} onClick={() => (setCount(count - 1))} >-</button>
            <button className="m-2 btn btn-dark"><span className="text-danger ">  {count}  </span></button>
            <button className=" m-2 btn btn-dark" style={{ width: "100PX" }} onClick={() => (setCount(count + 1))}>+ </button>
          </div>
          <button className="mx-auto btn btn-dark" style={{ width: "100PX" }}>Buy</button>
        </div>
        <div className="card mx-auto bg-secondary " style={{ height: "460px", width: "300px" }}>
          <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799745.jpg?t=st=1705998787~exp=1706002387~hmac=781f8f836fb3ef046a227bb79ff5ef50d25c96f53cb35bc376ad430603d0e0e8&w=740" style={{ height: "300px", width: "300px" }} />
          <h1 className='mx-auto '>Home</h1>
          <div className='mx-auto'>
            <button className="m-2 btn btn-dark" style={{ width: "100PX" }} onClick={() => (setCountt(countt - 1))} >-</button>
            <button className="m-2 btn btn-dark" btn btn-dark><span className="text-danger ">  {countt}  </span></button>
            <button className=" m-2 btn btn-dark" style={{ width: "100PX" }} onClick={() => (setCountt(countt + 1))}>+ </button>
          </div>
          <button className="mx-auto btn btn-dark" style={{ width: "100PX" }}>Buy</button>
        </div>
        <div className="card mx-auto bg-primary " style={{ height: "460px", width: "300px" }}>
          <img src="https://etimg.etb2bimg.com/thumb/msid-77098763,imgsize-397171,width-1200,height=765,overlay-etenergy/renewable/china-solar-panel-output-rises-15-7-per-cent-in-h1.jpg" style={{ height: "300px", width: "300px" }} />
          <h1 className='mx-auto '>Agriculture</h1>
          <div className='mx-auto'>
            <button className="m-2 btn btn-light" style={{ width: "100PX" }} onClick={() => (setCounttt(counttt - 1))} >-</button>
            <button className="m-2 btn btn-light"><span className="text-danger ">  {counttt}  </span></button>
            <button className=" m-2 btn btn-light" style={{ width: "100PX" }} onClick={() => (setCounttt(counttt + 1))}>+ </button>
          </div>
          <button className="mx-auto btn btn-light" style={{ width: "100PX" }}>Buy</button>
        </div>
        <div className="card mx-auto bg-warning " style={{ height: "460px", width: "300px" }}>
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/327260592/VD/AB/BK/71927529/6-pack-solar-firefly-lights-40-bulbs-garden-solar-powered-light-outdoor-warm-white-led-lights-500x500.jpg" style={{ height: "300px", width: "300px" }} />
          <h1 className='mx-auto '>Park</h1>
          <div className='mx-auto'>
            <button className="m-2 btn btn-light" style={{ width: "100PX" }} onClick={() => (setCounttt1(counttt1 - 1))} >-</button>
            <button className="m-2 btn btn-light"><span className="text-danger ">  {counttt1}  </span></button>
            <button className=" m-2 btn btn-light" style={{ width: "100PX" }} onClick={() => (setCounttt1(counttt1 + 1))}>+ </button>
          </div>
          <button className="mx-auto btn btn-light" style={{ width: "100PX" }}>Buy</button>
        </div>
        


      </div>
      
      </div>
  )
}