import React from 'react'
import logoimage from '../assests/logo.png'

const Logo = () => {
  return (
    <div>
      <img src={logoimage} alt="logo" className='h-[70px] w-[70px]' />
    </div>
  )
}

export default Logo