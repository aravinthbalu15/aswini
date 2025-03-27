import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <section className="h-[70px] w-full bg-black shadow-lg relative">
      <article className="h-full w-full flex items-center">
        <div className="h-full w-full text-blue-400 flex justify-between items-center px-6">
          <Logo />
          <Menu />
        </div>
      </article>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-300 to-blue-500"></div>
    </section>
  )
}

export default Navbar
