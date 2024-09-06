import React from 'react'

export default function Contact() {
  return (
    <>
      <section className='Contact py-5 text-center'>
        <h2 className='fw-bolder mb-3'>CONATACT SECTION</h2>
        <div className='star2 mb-3'>
  <i className="fa-solid fa-star "></i>
  </div> 
 <div className='w-50 m-auto '>
  <form action="">
  <div class="form-floating mb-3">
  <input type="text" class="form-control form-control-lg border-0 border-bottom" id="floatingInput" placeholder="text"/>
  <label for="floatingInput"><h6>userName:</h6></label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control form-control-lg border-0 border-bottom" id="floatingAge" placeholder="number"/>
  <label for="floatingAge"><h6>Age:</h6></label>
</div> 
<form class="form-floating mb-3">
  <input type="email" class="form-control form-control-lg border-0 border-bottom" id="floatingInputValue" placeholder="name@example.com" />
  <label for="floatingInputValue"><h6>Email:</h6></label>
</form>
<div class="form-floating mb-3">
  <input type="password" class="form-control form-control-lg border-0 border-bottom " id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword"><h6>Password:</h6></label>
</div> 
<button className='btn d-flex '>send Message</button>
 </form>
 </div>
      </section>
    </>
  )
}
