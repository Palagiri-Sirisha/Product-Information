import React from 'react'
import ReactPlayer from 'react-player'
const Product = () => {
  return (
    <div>
       
        <ReactPlayer  height={400} width={400} playing={true} style={{marginLeft:"100px"}} url={"https://www.youtube.com/embed/IbhuV9xS8vc?si=1py6k4UD1uzQ9W5s"} controls loop></ReactPlayer>
        
    </div>
  )
}

export default Product