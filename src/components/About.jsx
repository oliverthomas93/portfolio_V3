import React from 'react'
import UserImage from './UserImage'
import emptyProfilePic from '../assets/empty-profile-pic.jpg'

function About({ data }) {
  return (
    <div className='mx-auto max-w-7xl flex flex-col gap-8 py-5 sm:py-20 px-5 justify-center items-center font-roboto-slab text-center'>
        <UserImage src={data ? data[0].owner.avatar_url : emptyProfilePic} alt='Picture of Oliver Thomas' width='w-52'/>
    </div>
  )
}

export default About