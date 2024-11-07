import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Home.css'
function Home() {
  return (
    <>
      {/* <div className='container mb-5 d-flex align-items-center  ' style={{height:'80vh',background:"black" }}>
    <Row>
<Col className='p-5' sm={12} md={7}>
<h2 style={{color:"white"}}>it's Mhd swalih</h2>
<p style={{fontWeight:"20px", textAlign: 'justify',color:"white",fontSize:"18px"}}>I'm MOHAMMED SWALIH KT.and i bring a diverse background in MEARN stack to contribute to the teams success .Iam  a proactive and adaplatble proffesional who excels in problem-solving and delivering high-quality results .
i have completed my bachelor in physics from calicut university in 2024. I am pursing a MEARN stack cource at LUMINAR TECHNOLAB,CALICUT.KERALA To enhance my skills in full stack development.</p>
<button style={{borderRadius:"7px",width:"120px",height:"40px"}}>Connect Me</button>
</Col>
<Col className='py-4 'sm={12} md={5}>
<img src="data:image/jpeg;base64,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" className='' alt="" />
</Col>
    </Row>
</div> */}
      <div className='home'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQki9Nx7ZcjspzNXKaLeWNK2E3bTCqCuz-F-erjSv7arzvxbGAh8xWTdptxKjopXqxZJV0&usqp=CAU" alt="" />
        <h1><span>I'm Mhd Swalih,</span> fullstack developer</h1>
        <p style={{textAlign:'center'}}>I'm MOHAMMED SWALIH KT.and i bring a diverse background in MEARN stack to contribute to the teams success .
         I am pursing a MEARN stack cource at LUMINAR TECHNOLAB,CALICUT.KERALA To enhance my skills in full stack development.</p>
        <div className='home-action'>
          <div className=" btn btn-success home-connect">
            Connect with me
          </div>
          <div className=" btn  home-resume ">My resume</div>
        </div>
      </div>


    </>


  )
}

export default Home