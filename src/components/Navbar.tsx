import { useState } from 'react'
import {navLinks} from '../constants'
import logo from '../assets/logo.png'
import close from '../assets/close.png'
import menu from '../assets/menu.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 
    justify-between items-center navbar'>
      <img src={logo} alt=""
      className='w-[124px] h-[60px]' />
      <ul className='list-none sm:flex hidden
      justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal 
          cursor-pointer text-[16px] hover:bg-amber-500 p-2 rounded
          ${index === navLinks.length - 1 ? 
          'mr-0' : 'mr-10'} text-white mr-10`}>
            <a href="">{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1
      justify-end items-center'>
        <img src={toggle ? close : menu} 
        alt="menu" 
        className='w-[28px] h-[28px]
        object-contain'
        onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} 
        p-6 bg-amber-400 
        absolute top-20 right-0 
        mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
            <ul className='list-none flex-inline
              justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal 
              cursor-pointer text-[16px] text-center py-3 justify-center
              hover:bg-amber-500 w-full rounded
              ${index === navLinks.length - 1 ? 
              'mr-0' : 'mb-4'} text-white mr-10`}>
              <a href="">{nav.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar