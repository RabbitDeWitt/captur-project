import { navLinks } from '@/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [navbarColor, setNavbarColor] = useState<string>('bg-transparent')
  const [navbarTextColor, setNavbarTextColor] = useState<string>('text-white')

  const navbarTheme = `${navbarColor} ${navbarTextColor}`

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavbarColor('bg-white')
        setNavbarTextColor('text-black')
      } else {
        setNavbarColor('bg-transparent')
        setNavbarTextColor('text-white')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-[3] duration-300 ease-in ${navbarTheme}`}>
      <div className={`max-w-[1240px] px-4 h-[90px] flex items-center justify-between mx-auto`}>

        <h2 className={`z-10 ${toggle ? 'text-white' : null}`}>
          <Link href="/" onClick={() => setToggle(prev => false)}>
            Captur
          </Link>
        </h2>

        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map(({ id, label, link }) => (
            <li key={id} className="font-semibold">
              <Link
                href={link}
                onClick={() => setToggle(prev => false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button className={`block md:hidden z-10 ${toggle ? 'text-white' : null}`} onClick={() => setToggle(prev => !prev)}>
          {toggle ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>

        <div className={toggle ? 'menu-mobile left-0' : 'menu-mobile left-[-100%]'}>
          <ul className="flex md:hidden flex-col gap-4">
            {navLinks.map(({ id, label, link }) => (
              <li key={id} >
                <Link
                  href={link}
                  onClick={() => setToggle(prev => !prev)}
                  className='text-4xl hover:text-gray-500 duration-300 font-semibold'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Navbar