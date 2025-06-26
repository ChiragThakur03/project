import React from 'react'

const Brands = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-8">
        <div className="text-center text-2xl">
            <h1 className='font-semibold'>Trusted by over 45,000+ global brands and organizations, including</h1>
        </div>
        <div className="flex gap-10 mt-5 mb-12">
            <img className="w-[120px] h-[70px] rounded-lg" src="./assets/citibank-logo.webp" alt="citibank" />
            <img className="w-[120px] h-[70px] rounded-lg" src="./assets/flipkart-logo.png" alt="citibank" />
            <img className="w-[120px] h-[70px] rounded-lg" src="./assets/netflix-logo.png" alt="citibank" />
            <img className="w-[120px] h-[70px] rounded-lg" src="./assets/unilever-logo.png" alt="citibank" />
            <img className="w-[120px] h-[70px] rounded-lg" src="./assets/tata-logo.webp" alt="citibank" />
            <img className="w-[120px] h-[70px] rounded-lg" src="./assets/hotstar-logo.webp" alt="citibank" />
        </div>
    </div>
    </>
  )
}

export default Brands
