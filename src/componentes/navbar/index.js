import React from 'react'

import LoginButton from '../login'

const Navbar = ({children, ...props}) => {
    <nav {...props}>
        {LoginButton}
        <p>Post-it</p>
        {Sair}
    </nav>
}

export default Navbar