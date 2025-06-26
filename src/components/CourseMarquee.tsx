import React, { useEffect, useState } from 'react';

const courses = [
{ title: "Web Development", description: "Learn HTML, CSS, JS, and React.", image: "https://cdn-icons-png.flaticon.com/512/2721/2721294.png" },
  { title: "Data Science", description: "Master Python, Pandas, and ML.", image: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png" },
  { title: "AI & ML", description: "Deep dive into AI concepts and tools.", image: "https://cdn-icons-png.flaticon.com/512/4149/4149649.png" },
  { title: "Cybersecurity", description: "Protect systems and hunt bugs.", image: "https://cdn-icons-png.flaticon.com/512/4180/4180420.png" },
  { title: "UI/UX Design", description: "Design beautiful and functional interfaces.", image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
  { title: "Cloud Computing", description: "AWS, Azure, and DevOps basics.", image: "https://cdn-icons-png.flaticon.com/512/4149/4149680.png" },
  { title: "Blockchain", description: "Understand Web3 and decentralized apps.", image: "https://cdn-icons-png.flaticon.com/512/4209/4209509.png" },
];

export const CourseMarquee = () => {
  // Custom keyframes for marquee animation
  const marqueeStyle = {
    animation: 'scroll 30s linear infinite',
  };
  const marquee2Style = {
    animation: 'scroll2 30s linear infinite',
  };
  // Detect dark mode using a state
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    window.addEventListener('storage', checkDark);
    // Listen for class changes (for frameworks that toggle dark mode)
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('storage', checkDark);
      observer.disconnect();
    };
  }, []);
  // Light and dark mode backgrounds for course card
  const getCardStyle = () => {
    // Only use yellow glow in light mode, not in dark mode
    if (isDark) {
      return {
        background: 'linear-gradient(#333333,#333333) padding-box, linear-gradient(to right, #6a11cb, #2575fc) border-box',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '4px solid transparent',
        borderRadius: '12px',
      };
    } else {
      return {
        background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #6a11cb, #2575fc) border-box',
        boxShadow: '0 0 12px 0 #ffe066, 0 4px 12px rgba(0,0,0,0.08)',
        border: '4px solid transparent',
        borderRadius: '12px',
      };
    }
  };
  return (
    <>
    <style>{`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scroll2 {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .dark .marquee-bg-custom { background-color: #fafafa !important; }
    `}</style>
    <div className="w-[calc(100%-40px)] mb-5 mt-5 mx-5 rounded-lg overflow-hidden bg-[#fafafa] py-5 flex flex-col gap-5 marquee-bg-custom dark:marquee-bg-custom">
      <div className="flex w-fit" style={marqueeStyle}>
        {[...courses, ...courses].map((course, index) => (
          <div className="cursor-pointer flex flex-col w-[250px] h-[240px] mx-4 p-4 transition-transform duration-300 ease-in-out hover:scale-105" key={index} style={getCardStyle()}>
            <img src={course.image} alt={course.title} className="w-full h-[100px] object-contain rounded-lg mb-2 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-xl font-semibold text-center">{course.title}</h3>
            <p className="text-center">{course.description}</p>
          </div>
        ))}
      </div>
      <div className="flex w-fit" style={marquee2Style}>
        {[...courses, ...courses].map((course, index) => (
          <div className="cursor-pointer flex flex-col w-[250px] h-[240px] mx-4 p-4 transition-transform duration-300 ease-in-out hover:scale-105" key={index} style={getCardStyle()}>
            <img src={course.image} alt={course.title} className="w-full h-[100px] object-contain rounded-lg mb-2 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-xl font-semibold text-center">{course.title}</h3>
            <p className="text-center">{course.description}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};


