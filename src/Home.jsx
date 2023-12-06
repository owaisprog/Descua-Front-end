import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Testimonial from './components/testimonial'
import LowerBanner from './components/lowerBanner'
import Footer from './components/footer'


function Home() {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>

     <div className='header  ' >

        <div className=' py-10 text-center  mx-auto'>

            <h1 className= ' w-2/5 max-sm:w-full text-6xl max-xl:text-4xl  max-lg:text-3xl my-auto  xl  mx-auto text-center '>The Easiest Way to find your Documents</h1>
             <h2 className=' w-2/5 max-sm:w-4/5 mx-auto max-md:hidden  font-semibold my-7'>Skyrocket your online store conversion rate and improve the customer journey with smart online visual merchanding.</h2>

             <div className=' my-6   mx-auto w-3/4 max-sm:w-4/5  '>
                <img
                 src='../public/imgs/homePic (2).PNG' 
                  alt="" 
                  className='img-shadow mx-auto w-3/4  object-center'
                 
                 />
             </div>
            
        </div>
     </div>
      <Banner/>


      <div className='Clients   justify-center flex flex-wrap gap-14 my-5 max-w-screen-xl mx-auto px-4 xl:px-0 '>
        
   <div className='w-[45%]  h-[80%]'>
    <h1 className='text-5xl max-lg:text-4xl max-sm:hidden max-md:text-3xl  font-normal py-3 max-sm:w-[100%]'>Figma ipsum component variant main layer</h1>
    <p className='text-lg max-lg:text-base max-md:hidden max-sm:w-[100%]  w-[80%] text-gray-700 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iste?</p>
    <p className='text-lg max-lg:hidden  text-gray-700 py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, nihil porro! Molestiae quod similique, porro, atque inventore nesciunt eaque repellendus eligendi earum modi esse eos. Vero natus ipsum odio quidem.
    </p>
    <button className='border-b-2 max-sm:hidden border-black font-semibold'>Learn more</button>

   </div>
   <div className='w-[45%] max-sm:w-[100%]  h-full img-shadow'>
    <img src="../public/imgs/homePic (2).PNG" alt="" />
  

   </div>

      </div>



   <Testimonial/>
<LowerBanner/>
<Footer/>


    </div>
  )
}

export default Home