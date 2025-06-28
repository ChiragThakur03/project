import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Wrench, Briefcase, Puzzle, Brain, MessageCircle, Sparkles } from 'lucide-react';
import AiBuddyImage from '../assets/AiBuddyImage.png';

const AIBuddy = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      emoji: '🎓',
      title: 'Doubt Solver',
      description: 'Ask any academic question and get instant explanations.'
    },
    {
      emoji: '📚',
      title: 'Study Planner',
      description: 'Plan your study schedule based on your semester.'
    },
    {
      emoji: '🛠️',
      title: 'Project Ideas',
      description: 'Get custom project ideas for your stream.'
    },
    {
      emoji: '💼',
      title: 'Career Guidance',
      description: 'Explore career options and growth paths.'
    },
    {
      emoji: '🧩',
      title: 'Practice & Quiz',
      description: 'Solve MCQs, aptitude, and coding problems.'
    },
    {
      emoji: '🧠',
      title: 'Custom Roadmaps',
      description: 'Generate roadmaps for placements, GATE, and more.'
    }
  ];

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Start animation after a short delay when section comes into view
          setTimeout(() => {
            setShowFeatures(true);
          }, 500);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px -50px 0px' // Add some margin to trigger slightly after entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  // Typewriter animation effect
  useEffect(() => {
    if (!showFeatures || currentFeature >= features.length) return;

    const feature = features[currentFeature];
    const fullText = `${feature.emoji} ${feature.title} — ${feature.description}`;
    
    setIsTyping(true);
    setCurrentText('');

    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait 1 second before starting next feature
        setTimeout(() => {
          setCurrentFeature(prev => prev + 1);
        }, 1000);
      }
    }, 50); // Typing speed

    return () => clearInterval(typeInterval);
  }, [currentFeature, showFeatures]);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-30 animate-pulse transition-colors duration-300"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-30 animate-pulse transition-colors duration-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-indigo-100 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-20 transition-colors duration-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/50 rounded-full px-4 py-2 shadow-lg dark:shadow-xl mb-6 transition-all duration-700 ${
            isInView ? 'animate-in fade-in-50 slide-in-from-top-4' : 'opacity-0 translate-y-4'
          }`}>
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered Assistant</span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${
            isInView ? 'animate-in fade-in-50 slide-in-from-top-4' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-gray-900 dark:text-white transition-colors duration-300">Meet Your</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              AI Buddy
            </span>
          </h2>
          
          <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            isInView ? 'animate-in fade-in-50 slide-in-from-top-4' : 'opacity-0 translate-y-4'
          }`}>
            Get instant help with learning, careers, development, and more — all powered by AI.
          </p>
        </div>

        {/* Main Content - AI Character and Features */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left side - AI Character */}
          <div className={`relative order-2 lg:order-1 transition-all duration-700 delay-400 ${
            isInView ? 'animate-in fade-in-50 slide-in-from-left-8' : 'opacity-0 translate-x-8'
          }`}>
            {/* Floating elements around AI character */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-all duration-300 z-10">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-300 z-10">
              <Brain className="w-5 h-5 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-2 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600 rounded-2xl shadow-lg flex items-center justify-center transform rotate-45 hover:rotate-12 transition-all duration-300 z-10">
              <Puzzle className="w-7 h-7 text-white" />
            </div>

            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 z-10">
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            {/* AI Character Container */}
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Background decorative elements */}
              <div className="absolute inset-0 transform rotate-3 translate-x-4 translate-y-4 bg-purple-500/10 dark:bg-purple-400/20 rounded-3xl blur-2xl transition-colors duration-300"></div>
              <div className="absolute inset-0 transform rotate-2 translate-x-2 translate-y-2 bg-blue-500/10 dark:bg-blue-400/20 rounded-3xl blur-xl transition-colors duration-300"></div>
              
              {/* AI Character Image */}
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={AiBuddyImage}
                  alt="AI Buddy Assistant"
                  className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transform transition-transform duration-500 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right side - Animated Feature List */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-500 ${
            isInView ? 'animate-in fade-in-50 slide-in-from-right-8' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-xl dark:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
              <div className="space-y-6">
                {/* Show completed features */}
                {features.slice(0, currentFeature).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-100 dark:border-purple-800/30 animate-in slide-in-from-left-4 fade-in-50 transition-colors duration-300"
                    style={{ animationDuration: '0.5s' }}
                  >
                    <span className="text-2xl flex-shrink-0">{feature.emoji}</span>
                    <div className="flex-1">
                      <span className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {feature.title}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2 transition-colors duration-300">
                        — {feature.description}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Show currently typing feature */}
                {currentFeature < features.length && showFeatures && (
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-100 dark:border-purple-800/30 animate-in slide-in-from-left-4 fade-in-50 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0">
                      {currentText.length > 0 ? features[currentFeature].emoji : ''}
                    </span>
                    <div className="flex-1">
                      <span className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {currentText}
                        {isTyping && (
                          <span className="inline-block w-0.5 h-6 bg-purple-600 dark:bg-purple-400 ml-1 animate-pulse"></span>
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {/* Placeholder for remaining features */}
                {Array.from({ length: Math.max(0, features.length - currentFeature - (showFeatures ? 1 : 0)) }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-700/20 border border-gray-100 dark:border-gray-700/30 opacity-30 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button - Show after all features are displayed */}
        {currentFeature >= features.length && (
          <div className="text-center animate-in fade-in-50 slide-in-from-bottom-4" style={{ animationDelay: '0.5s' }}>
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-lg">
              <MessageCircle className="w-5 h-5" />
              Ask Your Buddy Now
              <div className="w-4 h-4 group-hover:translate-x-1 transition-transform">→</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIBuddy;