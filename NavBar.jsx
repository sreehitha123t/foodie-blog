import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import logo from '../assets/logo.png';
import { FaEnvelope, FaHome, FaInfoCircle, FaList, FaUser } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Foodie<span>Blog</span></div>
            <ul className="nav-links">
                <li>
                    <Link to='/h'>
                        <FaHome/>Home</Link>
                
            </li>
            <li>
                <Link to='/c'>
                    <FaList />Categories</Link>
            </li>
            <li>

                <Link to='/a'>
                    <FaInfoCircle />About</Link>
            </li>
            <li>

                <Link to='/con'>
                    <FaEnvelope />Contact</Link>
            </li>
            <li>

                <Link to='/p'>
                    <FaUser />Profile</Link>
            </li>
        </ul>

        </nav >
  )
}

export default NavBar