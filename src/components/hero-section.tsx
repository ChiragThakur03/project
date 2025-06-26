import React from 'react'

const Herosection = () => {
  return (
    <div className='hero-section rounded-lg shadow-lg mx-5'>
      <div className="hero-section-container text-white min-h-screen h-[950px] relative border border-transparent rounded-b-lg overflow-hidden" style={{background: 'linear-gradient(to top, #d930f0, #381ffa, #ffffff)'}}>
        <div>
          <div className="hero-section-top flex flex-col items-center justify-center mt-[100px]">
            <h1 className="heroHeading text-[60px] font-semibold" style={{background: 'linear-gradient(to right, #005cf0, #de027b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Drive Learning Success
            </h1>
            <h3 className="subHeading text-[32px] font-medium text-black dark:text-white">
              with Autonomous AI Mentors for Every Student Journey
            </h3>
            <p className="description text-[24px] font-light text-black dark:text-white text-center justify-center">
              Accelerate skill development, boost confidence, and empower learners with personalized guidance using <br /> industry-trained AI Mentors built to support every step of your educational journey.
            </p>
            <div className="mt-8">
              <button className="hero-cta-button flex gap-[10px] px-[20px] py-[10px] mt-[30px] text-white rounded-full transition duration-300" style={{background: 'linear-gradient(to right, #2f26df,#9333EA)', boxShadow: '0 0 30px 0 rgba(216, 99, 9, 0.5)'}}>
                Start a Conversation
                <svg className='arrow-icon text-white w-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12.71 12.71 18.21 7.21 21 10 21 3 14 3 16.79 5.79 11.29 11.29 12.71 12.71z"></path>
                  <path d="m11,5v-2h-6c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-6h-2v6H5V5h6Z"></path>
                </svg>
              </button>
            </div>
            <div className="hero-section-bottom mt-[30px] flex flex-col bg-black">
              <div className="hero-images flex justify-center">
                <img className="w-[500px] absolute left-[50px] rounded-lg border border-gray-400" style={{boxShadow: '0 0 50px 0 rgba(224, 151, 6, 1)'}} src="./assets/Dashboard.png" alt="hero-image" />
              </div>
              <div className="w-full h-[100px] bg-black"></div>
            </div>
          </div>
        </div>
        <style>{`
          .dark .hero-section-container {
            background: linear-gradient(to top, #d930f0, #381ffa, #1A1A1A) !important;
          }
          .dark .heroHeading {
            background: linear-gradient(to left, #de027b, #ffffff) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
          }
          .dark .hero-cta-button {
            box-shadow: 0 0 30px 0 rgba(193, 191, 191, 0.6) !important;
          }
          .hero-cta-button:hover {
            transform: scale(1.02);
            background: linear-gradient(to right, #9333EA, #2f26df) !important;
            box-shadow: 0 0 20px 0 rgba(193, 191, 191, 1) !important;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Herosection
