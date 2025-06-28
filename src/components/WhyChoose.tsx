import React from 'react';
import { CheckCircle, BookOpen, Users, ArrowRight } from 'lucide-react';
import whyChooseImage from '../assets/whychoose.png';

const WhyChoose = () => {
  const features = [
    {
      title: 'AI Powered Personalised Learning',
      desc: 'Smart Recommendations based on your goals.',
    },
    {
      title: 'Expert Mentorship',
      desc: 'Learn directly from real industry pros.',
    },
    {
      title: 'Practical Projects',
      desc: 'Apply what you learn in real-world projects.',
    },
    {
      title: 'Career Roadmaps',
      desc: 'Step-by-step guidance to your dream goals.',
    },
    {
      title: 'Flexible And Accessible',
      desc: 'Learn anytime, anywhere - your pace, your time.',
    },
    {
      title: 'Certificates and Internships',
      desc: 'Get certified and unlock career opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-30 animate-pulse transition-colors duration-300"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-30 animate-pulse transition-colors duration-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-indigo-100 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-20 transition-colors duration-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/50 rounded-full px-4 py-2 shadow-lg dark:shadow-xl mb-6 transition-colors duration-300">
            <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Why Choose EduTrack360</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-300">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Us?
            </span>
          </h2>
        </div>

        {/* Main Content - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Background decorative elements for image */}
              <div className="absolute inset-0 transform rotate-3 translate-x-4 translate-y-4 bg-purple-500/10 dark:bg-purple-400/20 rounded-3xl blur-2xl transition-colors duration-300"></div>
              <div className="absolute inset-0 transform rotate-2 translate-x-2 translate-y-2 bg-blue-500/10 dark:bg-blue-400/20 rounded-3xl blur-xl transition-colors duration-300"></div>
              
              {/* Main image container - removed white background */}
              <div className="relative">
                <img
                  src={whyChooseImage}
                  alt="Why Choose Us"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right side - Simple List Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-400 mb-2 flex items-start transition-colors duration-300">
                  <span className="mr-3 text-purple-600 dark:text-purple-400 text-xl sm:text-2xl leading-none">•</span>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 pl-7 leading-relaxed transition-colors duration-300 mb-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              Start Learning Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-gray-700/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Meet Our Mentors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;