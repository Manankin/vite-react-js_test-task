import { NavLink } from "react-router-dom"
import '../assets/styles/header.scss'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav navigation">
        <NavLink to='edit' className="navigation__item">Edit Users</NavLink>
        <NavLink to='user' className="navigation__item">Users</NavLink>
      </nav>
    </header>
  )
}