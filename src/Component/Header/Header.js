import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1 className='text-3xl text-red-700 font-bold my-7'>
            This is for the Router Practice.
        </h1>
        
        <nav>
          <ul className='flex justify-center mb-9'>
            <li className='text-3xl ms-5'>
            <NavLink
                to="Home"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}>
                  Home
                </NavLink>
            </li>

            <li className='text-3xl mx-5'>
            <NavLink
                to="About"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}>
                  About
                </NavLink>
            </li>

            <li className='text-3xl mr-5'>
            <NavLink
                to="Blog"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}>
                  Blog
                </NavLink>
            </li>

            <li className='text-3xl mr-5'>
            <NavLink
                to="Friends"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}>
                  Friends
                </NavLink>
            </li>

          </ul>
        </nav>
    </div>
  )
}

export default Header