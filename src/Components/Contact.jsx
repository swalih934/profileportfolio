import React from 'react'

function Contact() {
  return (
<>
<h2 style={{fontWeight:"bold", textAlign:"center", padding:"60px"}}>CONNECT ME</h2>


<div className='d-flex justify-content-center  ' style={{}}>

    <div className='  text-center border shadow p-5 mt-5 mb-5 w-75' >
    <div className=' p-5'>
          <input  type="text" className='form-control my-3 p-3' placeholder='Enter your Name'  />
          <input type="text" className='form-control my-3 p-3' placeholder='Enter your Email'  />
          <textarea className='form-control my-3 p-3'  name="" placeholder='Message me...' id=""></textarea>
    </div>
<button className='btn btn-danger mb-4'>SUBMIT</button>
    </div>

</div>


</>


)
}

export default Contact