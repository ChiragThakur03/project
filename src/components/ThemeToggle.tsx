import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle theme"
    >
      <div
        className={`relative w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'light' ? 'translate-x-0' : 'translate-x-5'
        }`}
      >
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-yellow-500" />
        ) : (
          <Moon className="w-3 h-3 text-blue-400" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;