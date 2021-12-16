import React from 'react'

let styles = {
    position:"relative"
}

const Menu = () => {
    return (
        <div className="AuthMenu">
            <ul>
                <li><a href="#">cart
                
                <span style={{ styles }}>
                <i className="fas fa-shopping-cart"></i>
                </span>
                </a></li>
                <li><a href="#">sign in  

                <span style={{ styles }}>
                <i className="fas fa-user"></i>
                </span>
                </a></li>
            </ul>
        </div>
    )
}

export default Menu
