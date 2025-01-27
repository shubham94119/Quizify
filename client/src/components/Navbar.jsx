import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' bg-black bg-opacity-75 flex items-center justify-between py-3 px-10 size-full rounded-lg  my-1'>
            <Link to={"/"} className='text-4xl font-bold font-mono'>
                Quizify
            </Link>
            <div className='flex gap-5 text-2xl font-bold'>
                <NavLink to={"/"} className={({ isActive }) => isActive === true ? "text-green-600" : "text-white"}>
                    Home
                </NavLink>
                <NavLink to={"/dashboard"} className={({ isActive }) => isActive === true ? "text-green-600" : "text-white"}>
                    Dashboard
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar