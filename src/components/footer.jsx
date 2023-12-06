import React from 'react'

function Footer() {
  return (
    <div className='bg-btnBlue mt-4'>
        <div className='max-w-screen-xl mx-auto px-4 xl:px-0'>

            <div className='flex justify-evenly gap-20 py-10'>

            <div className='logo max-sm:text-center'>
            <h1 className='text-2xl  text-white font-bold'>FILENO</h1>
            <p className='sm:hidden text-white font-medium mt-3'>Copyright © 2023 FILENO ®</p>
            </div>
            <div className='max-sm:hidden'>
                <h1 className='text-2xl text-white font-semibold mb-6'>Company</h1>
                <p className='text-white pb-3 '>About US</p>
                <p className='text-white pb-3 '>Blog</p>
                <p className='text-white pb-3 '>Career</p>
                <p className='text-white pb-3 '>Contact Us</p>
            </div>
            <div className='max-sm:hidden'>
                <h1 className='text-2xl text-white font-semibold mb-6'>Legal</h1>
                <p className='text-white pb-3 '>Cookies Policy</p>
                <p className='text-white pb-3 '>Privacy Policy</p>
                <p className='text-white pb-3 '>Terms of Services</p>
            </div>
            <div className='max-sm:hidden'>
                <h1 className='text-2xl text-white font-semibold mb-6'>Company</h1>
                <p className='text-white pb-3 '>About US</p>
                <p className='text-white pb-3 '>Blog</p>
                <p className='text-white pb-3 '>Career</p>
                <p className='text-white pb-3 '>Contact Us</p>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Footer