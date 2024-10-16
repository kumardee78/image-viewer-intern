import { useState } from 'react'
import './App.css' 
import images from './images'

function App() {

  const [imgs, setImgs] = useState(images)
  const [curtImgIdx, setCurtimgTdx] = useState(0)

  function showimage(idx){
    setCurtimgTdx(idx)
  }
  return (
    <>
      <div className='flex items-center justify-center pt-8 pb-12 bg-black'>
        <img src={imgs[curtImgIdx]} alt="" className='lg:w-[60rem] sm:w-[25rem] w-[15rem] lg:h-[32rem] sm:h-[16rem] h-[10rem]'/>
      </div>
      <div className='flex gap-6 overflow-x-scroll py-6 bg-[#273f43] text-white'>
        {imgs.map((image, index)=>{
          return (
            <img src={image} alt={image} key={index} onClick={()=>showimage(index)}  className='lg:w-[20rem] sm:w-[10rem] w-[6rem] md:h-[10rem] h-[5rem] rounded-lg'/>
          )
        })}
      </div>
    </>
  )
}
export default App
