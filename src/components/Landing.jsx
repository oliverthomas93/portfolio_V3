import React from 'react'
import Button from './Button'

function Landing() {
  return (
    <>
      <div className='mx-auto max-w-7xl flex flex-col gap-8 py-5 sm:py-20 px-5 justify-center items-center font-roboto-slab text-center'>
          <h1 className='font-bold text-7xl sm:text-8xl'>Oliver Thomas</h1>
          <div>
            <p className='max-w-md text-xl sm:text-3xl'>I'm a <span className='font-bold'>Software Engineer</span> based in Worcester currently working for <span className='font-bold'><a href='https://www.whg.uk.com/' target='_blank'>Walsall Housing Group</a></span></p>
          </div>
          <Button text='Say hello' />
      </div>
    </>
  )
}

export default Landing