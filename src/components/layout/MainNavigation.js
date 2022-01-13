import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    // const navigate = useNavigate();
    return (
        <header className={classes.header}>
            <div className={classes.logo}>My Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : ''}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/welcome"
                            className={({ isActive }) => isActive ? classes.active : ''}
                        >Welcome</NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => isActive ? classes.active : ''}
                        >Products</NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to="/quotes"
                            className={({ isActive }) => isActive ? classes.active : ''}
                        >Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/new-quote"
                            className={({ isActive }) => isActive ? classes.active : ''}
                        >Add a Quote</NavLink>
                    </li>
                </ul>
                {/* <button onClick={() => {
                    navigate('/')
                }}>Home</button>
                <button onClick={() => {
                    navigate('/welcome')
                }}>Welcome</button>
                <button onClick={() => {
                    navigate('/products')
                }}>Products</button>
                <button onClick={() => {
                    navigate(-1)
                }}>{'\<\-'}</button>
                <button onClick={() => {
                    navigate(1)
                }}>{'\-\>'}</button> */}
            </nav>
        </header>
    )
}

export default MainNavigation
