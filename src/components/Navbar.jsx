import useToggle from '../useToggle'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Group 12.svg'

function Navbar() {
  const [isOn, toggleIsOn] = useToggle();

  const navItems = [
    { name: 'Projects', href: '/projects'},
    { name: 'About', href: '/about'},
    { name: 'Contact', href: '/contact'},
  ]

  return (
    <>
      <div className='mx-auto max-w-7xl font-roboto-slab'>
        <div className='flex justify-between flex-row w-full z-10 px-5 py-5 md:px-10 bg-white'>
          <Link to='/'><img onClick={isOn ? toggleIsOn : null} className='w-8' src={logo} alt="Oliver Thomas logo" /></Link>
          <FontAwesomeIcon onClick={toggleIsOn} className='sm:hidden cursor-pointer' size='xl' icon={isOn ? faX : faBars} />
          <ul className={`flex sm:flex gap-5 justify-between flex-col sm:flex-row mt-12 pb-5 sm:pb-0 sm:mt-0 w-full sm:w-auto absolute left-0 pl-5 sm:pl-0 sm:relative bg-white shadow-lg sm:shadow-none ${isOn ? '' : 'hidden'}`}>
            {navItems.map((item) =>  (
                <li onClick={toggleIsOn} className='font-normal hover:text-ot-blue' key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar