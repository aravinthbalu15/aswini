import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <section>
        <article className='h-[75px] w-[350px]'>
            <div>
                <ul className='flex justify-around items-center text-2xl h-[70px]'>
                    <li><NavLink to='/Home'>Home</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                    <li><NavLink to='/Register'>Register</NavLink></li> 
                </ul>
            </div>
        </article>
    </section>
  )
}

export default Menu