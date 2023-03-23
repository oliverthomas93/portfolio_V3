import React from 'react'
import UserImage from './UserImage'
import emptyProfilePic from '../assets/empty-profile-pic.jpg'
import Button from './Button'

function Landing({ data }) {
  return (
    <>
      <div className='mx-auto max-w-7xl flex flex-col gap-8 py-5 sm:py-20 px-5 justify-center items-center font-roboto-slab text-center'>
          <UserImage src={data ? data[0].owner.avatar_url : emptyProfilePic} alt='Picture of Oliver Thomas' width='w-52'/>
          <h1 className='font-bold text-7xl sm:text-8xl'>Oliver Thomas</h1>
          <div>
            <p className='max-w-xs text-xl'>I'm a <span className='font-bold'>Software Engineer</span> based in Worcester currently working for <span className='font-bold'><a href='https://www.whg.uk.com/' target='_blank'>Walsall Housing Group</a></span></p>
          </div>
          <Button text='Say hello' />
      </div>
    </>
  )
}

export default Landing