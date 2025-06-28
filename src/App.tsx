import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChoose from './components/WhyChoose';
import StudyPaths from './components/StudyPaths';
import AIBuddy from './components/AIBuddy';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <WhyChoose />
        <StudyPaths />
        <AIBuddy />
      </div>
    </ThemeProvider>
  );
}

export default App;