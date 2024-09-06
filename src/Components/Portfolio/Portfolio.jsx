import React from 'react'
import port1 from "../../assets/poert1.png"
import port2 from "../../assets/port2.png"
import port3 from "../../assets/port3.png"

export default function Portfolio() {
  
  return (
    <>
<section className='portfolio py-5 text-center'>
 <h2 className='fw-bolder mb-4'>PORTFOLIO COMPONENT</h2>
 <div className='star2 mb-3'>
  <i className="fa-solid fa-star "></i>
  </div> 
  <div className="container">
 <div className="row ">
  {/* <div className="flex justify-between flex-wrap items-center gap-4 w-full p-10"> */}
  <div className="col-md-4">
          <div className="item w-100 rounded-3 mx-auto">
            <img className="w-100 rounded-3" src={port1} alt="" />
            <div className="layer rounded-3 ">
              <i className="fa fa-plus"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="item w-100 rounded-3 mx-auto">
            <img className="w-100 rounded-3" src={port2} alt="" />
            <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-3 ">
              <i className="fa fa-plus"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="item w-100 rounded-3 mx-auto">
            <img className="w-100 rounded-3" src={port3} alt="" />
            <div className="layer rounded-3 ">
              <i className="fa fa-plus"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="item w-100 rounded-3 mx-auto">
            <img className="w-100 rounded-3" src={port1} alt="" />
            <div className="layer rounded-3 ">
              <i className="fa fa-plus"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="item w-100 rounded-3 mx-auto">
            <img className="w-100 rounded-3" src={port2} alt="" />
            <div className="layer rounded-3 ">
              <i className="fa fa-plus"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="item w-100 rounded-3 mx-auto">
            <img className="w-100 rounded-3" src={port3} alt="" />
            <div className="layer rounded-3 ">
              <i className="fa fa-plus"></i>
              
            </div>
            </div>
          </div>
        </div>
 
 </div>
  {/* </div> */}
  </section>
  
      </>
  )
}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
 
      <div class="modal-body">
        ...
      </div>
  
    </div>
  </div>
</div>
