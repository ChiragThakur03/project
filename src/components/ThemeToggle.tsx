import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-end w-full">
      <div
        onClick={() => setDarkMode(!darkMode)}
        className={`w-10  flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-0.5 cursor-pointer transition duration-300`}
      >
        <div
          className={`bg-white dark:bg-yellow-400 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></div>
      </div>
      <span className="text-sm">{darkMode ? '🌙 Dark' : '☀️ Light'}</span>
    </div>
  );
};

export default ThemeToggle;
