import React from 'react'

const LoginButton = ({children, ...props}) =>{
    <button {...props}>
        {children}
    </button>
}

export default LoginButton

const Login = ({usuario, logaUsuario}) =>{
    usuario ? (
        
        <Redirect to='/' />
    ) : (
        <article></article>
    )
}