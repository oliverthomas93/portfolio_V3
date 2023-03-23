import React from 'react'

function Button({ text, link }) {
  return (
    <a href={link} target='_blank'>
      <button className='bg-ot-dark dark:bg-ot-lighter hover:bg-ot-blue text-white py-2 px-4 rounded-full w-full sm:w-auto'>
        {text}
      </button> 
    </a>
    
  )
}

export default Button