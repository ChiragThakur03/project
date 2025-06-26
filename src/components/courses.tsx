import React from 'react'
import './courses.css'
import { CourseMarquee } from './CourseMarquee'

export const Courses = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[50px] font-medium text-center mt-[50px] bg-gradient-to-l from-[#de027b] to-[#0d38fb] rounded-lg px-5 py-1 text-white z-20 dark:bg-gradient-to-l dark:from-[#de027b] dark:to-[#0d38fb]">
                Access Every Course Effortlessly
                </h1>
                <h3 className="text-[35px] bg-transparent">
                with a Wide Range of Free Learning Resources    
                </h3>
                <p className="text-center text-[20px] font-light">
                Explore top-quality courses across various subjects—completely free. <br />Discover the right path, stay motivated, and start learning  <br /> without any cost, at your own pace.
                </p>
            </div>
            <CourseMarquee />
            <div className="flex justify-center pb-5">
                <button className="text-center px-5 py-2 bg-gradient-to-r from-[#2f26df] to-[#9333EA] rounded-full border border-gray-400 shadow-lg flex justify-center gap-2 dark:shadow-[0_0_5px_0_rgba(193,191,191,1)]">
                Explore all Courses 
                <i className="ri-arrow-right-s-line"></i>
                </button>
            </div>
        </>
    )
}


