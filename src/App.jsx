import React from 'react'
import video from "/5091624-hd_1920_1080_24fps.mp4"

function App() {
  return (
    <div className='header'>
      <video src={video} loop autoPlay muted></video>
      <div className='h_content'>
        <h1 style={{color:"white",textShadow:".1px .1px 3px black"}}>Animated Back-Ground</h1>
        <p style={{color:"white",textShadow:".1px .1px 3px black"}}>Design By</p>
        <h1 style={{color:"white", textShadow:".1px .1px 3px black"}}>Muhammad Arham Shafi Butt</h1>
      </div>
    </div>
  )
}

export default App