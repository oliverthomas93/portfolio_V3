import React from 'react'
import Button from './Button'

function Card({ img, title, desc, linkUrl, buttontext }) {
  return (
    <div className='px-5 pb-11 pt-2 md:w-1/2'>
      <img src={img} alt="" className='rounded-md shadow-lg mb-4 h-auto'/>
      <div className='px-2'>
        <h2 className='font-bold text-lg mb-1'>{title}</h2>
        <p className='text-ot-lighter dark:text-ot-light mb-4'>{desc}</p>
        <Button link={linkUrl} text={buttontext}/>
      </div>
    </div>
  )
}

export default Card