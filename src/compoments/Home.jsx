import React from 'react'
import Image from '../assets/photo1.jpg'


const Home = () => {
  return (
    <div className='row vh-100 '>
    <div className="col-6">
      <h1>Hi There</h1>
      <h1>I'm Aniket Nikhade</h1>
      <h2>I am <span>Full Stack Developer</span></h2>
      <button className='btn btn-dark'>About me</button>

      <div>
    <i style={{padding:"8px"}}class ="fa fa-linkedin-square" aria-hidden="true"></i>
    <i style={{padding:"8px"}}class="fa fa-bitbucket" aria-hidden="true"></i>
    <i style={{padding:"8px"}}class="fa fa-facebook-official" aria-hidden="true"></i>
    <i style={{padding:"8px"}}class="fa fa-instagram" aria-hidden="true"></i>
    
  
    </div>
    </div>
   
    <div className="col-6 container" >
    <img src={Image} alt='image'style={{height:"300px", width:"350px"}}/>
    </div>
  </div>
  )
}

export default Home
//Personal access token -- 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