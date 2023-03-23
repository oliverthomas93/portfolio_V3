import React from 'react'

function UserImage({ src, alt, width }) {
  return (
    <>
      <img src={src} alt={alt} className={width + ' ' + 'rounded-full w-'}/>
    </>
  )
}

export default UserImage