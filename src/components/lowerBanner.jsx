import React from 'react'

function LowerBanner() {
  return (
    <div className=' max-w-screen-xl mx-auto px-4 xl:px-0  '>

  <div className='rounded-md     bg-btnBlue'>
        <div className='flex max-sm:flex-col justify-between py-10 max-sm:py-4 px-10   '>

    <div className='w-[60%] max-sm:w-[100%] text-center'>
        <h1 className='text-4xl max-sm:text-2xl  font-semibold md:my-auto text-white'>Subsribe to get updated!</h1>
        <p className='text-white pt-4 max-md:hidden  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet accusamus consectetur neque rerum quas assumenda repellat eaque asperiores quidem, optio quasi natus eum minus, saepe alias.
        </p>
    </div>
    <div className='max-sm:text-center '><button className='bg-lightBlue py-2 px-10
     max-sm:px-4 rounded-md ring-offset-2 ring-1 font-semibold text-white my-9 max-sm:my-2 hover:shadow-lg hover:bg-blue-600 '>Subscribe</button></div>

        </div>

  </div>
    </div>
  )
}

export default LowerBanner