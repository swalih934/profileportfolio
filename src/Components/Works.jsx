import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./work.css'
function Works() {
  return (
    <>
      <div  className='d-flex  justify-content-center gap-3   text-center mt-5 row'>
      <h1 className='mt-5' style={{ textAlign: 'center', fontWeight: "bold" }}>MY WORKS</h1>

        <Card className='border shadow col-sm-12 mt-4' style={{ width: '15rem' }}>
          {/* <i className="fa-solid fa-cloud mt-4" style={{ color: "skyblue", fontSize: "50px", textAlign: 'center' }} /> */}
          <i className="fa-brands fa-stripe-s mt-4" style={{color: "#e70404",fontSize: "50px", textAlign: 'center'}} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center', }}>Streamit</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A weather forcasting application that provides real time
              Some quick example text to build on the card title and make up the
              bulk of the card's content.

            </Card.Text>
            <Button href='https://templates.iqonic.design/streamit-dist/frontend/html/home.html' style={{}} className='btn-outline-success mt-5' variant="">VIEW</Button>

          </Card.Body>

        </Card>
        <Card className='border shadow col-sm-12 mt-4' style={{ width: '15rem' }}>
          <i className="fa-solid fa-calculator mt-4" style={{ color: "", fontSize: "50px", textAlign: 'center' }} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center', }}>  Calculator</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A Responsive Web application for calculating body mass index with user
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href='https://swalih934.github.io/calculator/' className='btn-outline-success mt-4' variant="">VIEW</Button>
          </Card.Body>
        </Card>
        <Card className='border shadow col-sm-12 mt-4' style={{ width: '15rem' }}>
          <i className="fa-solid fa-user mt-4" style={{ color: "#a3a7ae", fontSize: "50px", textAlign: 'center' }} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center',  }}>Portfolio</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A personal portfolio website to showcase my project
              Some quick example text to build on the card title and make up the
              bulk of the card's content.

            </Card.Text>
            <Button className='btn-outline-success mt-5' variant="">VIEW</Button>
          </Card.Body>
        </Card>
        <Card className='border shadow col-sm-12 mt-4' style={{ width: '15rem' }}>
          <i className="fa-brands fa-facebook mt-4" style={{ color: "blue", fontSize: "50px", textAlign: 'center' }} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center',  }}>Facebook</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A secure online sysytem  for managing social media
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='btn-outline-success mt-5' variant="">VIEW</Button>
          </Card.Body>
        </Card>
      </div>


    </>


  )
}

export default Works