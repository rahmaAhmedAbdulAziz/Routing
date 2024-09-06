import React from 'react'
import Profile from "../../assets/avataaars.svg"

export default function Home() {
  return ( 
    <>
  <header className='vh-100 d-flex align-items-center justify-content-center'>
<div className="container text-center ">
  <img className='w-25 mb-5' src={Profile} alt="" />
  <h1 className='fw-bolder mb-3'>start Framework</h1>
  <div className='star mb-3'>
  <i className="fa-solid fa-star "></i>
  </div>
  <p>Graphic Artist - Web Designer - Illustrator</p>
</div>
</header>
    </>
  )
}
