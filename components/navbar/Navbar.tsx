import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '../active-link/ActiveLink';
import style from './Navbar.module.css'

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]



export const Navbar = () => {

  

  return (
    <nav className={style.container}>

      <Link href={'/'} className={style.link}>
        <HomeIcon className={style.icono} />
        <span className={style.span}>Home</span>
      </Link>

      <div className={style.items}>

      {
        navItems.map( navItem => (
          <ActiveLink key={navItem.path} { ...navItem }  />
        ))
      }
      </div>



    </nav>
  )
}