import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./About.css"

// import { Row,Col } from 'react-bootstrap'
function About() {
  return (
<>
<h2 style={{ fontWeight:"bold",textAlign:"center" }}>ABOUT ME</h2>

<div className='container-fluid d-flex justify-content-center mt-5 row' style={{background:'' }}>

    <Card className='border border-2 col-sm-12 mt-4' style={{ width: '22rem', border:"white", }}>
      <Card.Body>
        <Card.Text style={{fontSize:"18px"}}>
          Name:Mohammed Swalih
          <br /><br />
          Age:22
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='border border-2 col-sm-12 mt-4 ' style={{ width: '22rem', border:"white"}}>
      <Card.Body>
        <Card.Text style={{fontSize:"18px"}}>
          Address:Kazhungum Thottathil House
          <br /><br />
          Pincode:676306
        </Card.Text>
      </Card.Body>
    </Card> 
    <Card className='border border-2 col-sm-12 mt-4' style={{ width: '22rem',border:"white",transition:" transform .2s" }}>
      <Card.Body>
        <Card.Text style={{fontSize:"18px"}}>
          Contact:8606503837 
          <br /><br />
          Email:sswalih881@gmail.com
        </Card.Text>
      </Card.Body>
    </Card>
</div>





</>

)
}

export default About