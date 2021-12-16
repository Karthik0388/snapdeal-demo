import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import './Header.css'
const Header = () => {
    return (
        
           <section id="HeaderComp">
               <article>
               <Logo/>
               <Search/>
               <Menu/>
               </article>
           </section>
     
    )
}

export default Header
