import React, { useState } from 'react'
import './navbar.css'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

    
    
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {setIsHover(true);}
    const handleMouseLeave = () => {setIsHover(false);}
    

    return (
        <>
            <div className={`navbar-container flex justify-between items-center mt-[10px] mx-[20px] p-[10px] rounded-t-[10px] bg-[#f8f9fa] dark:bg-[#212020] dark:text-white dark:border dark:border-transparent`} >
                <div className="left-side flex items-center gap-[20px] dark:text-white">
                    <div className="logo cursor-pointer">
                        <img className="w-[150px]" src="../assets/logo.svg" alt="logo" />
                    </div>
                    <div className="links flex items-center gap-[20px] text-[10px] font-normal text-[#585656] cursor-pointer transition-all duration-300 dark:text-white">
                        <p className="text-[18px] hover:text-black dark:hover:text-white">Home</p>
                        <p className="text-[18px] hover:text-black dark:hover:text-white">Menu</p>
                        <p className="text-[18px] hover:text-black dark:hover:text-white">Menu</p>
                        <p className="text-[18px] hover:text-black dark:hover:text-white">Menu</p>
                    </div>
                </div>
                <div className="right-side flex w-[300px] items-center justify-center">
                    <div>
                        <button
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                         className={`button flex bg-[#6036F0] px-[10px] py-[10px] justify-center w-[150px] border-none rounded-[10px] text-white text-[16px] cursor-pointer ${isHover ? 'bg-gradient-to-r from-purple-500 to-sky-400 text-white' : ''}`}
                         >Request a Demo</button>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </>
    )

}

export default Navbar
