import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-orange-900 text-white'>
            <div className='flex justify-between container m-auto py-2 items-center'>
                <div className="text-3xl">
                    Logo
                </div>
                <div>
                    <ul className='flex'>
                        <li className='p-4 cursor-pointer hover:text-gray-950'>
                            <Link to={""}>Home</Link>
                        </li>
                        <li className='p-4 cursor-pointer hover:text-gray-950'>
                        <Link to={"/shop"}>Shop</Link>
                        </li>
                        <li className='p-4 cursor-pointer hover:text-gray-950'>
                            About
                        </li>
                        <li className='p-4 cursor-pointer hover:text-gray-950'>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header