import React from 'react';
import { Zap, Play, Check, ArrowRight, Star, TrendingUp, Target, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode gradients */}
        <div className="absolute -top-32 -left-32 sm:-top-48 sm:-left-48 custom:-top-60 custom:-left-60 w-64 h-64 sm:w-96 sm:h-96 custom:w-[32rem] custom:h-[32rem] bg-purple-200 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-30 animate-pulse transition-colors duration-300"></div>
        <div className="absolute -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 custom:-bottom-60 custom:-right-60 w-64 h-64 sm:w-96 sm:h-96 custom:w-[32rem] custom:h-[32rem] bg-blue-200 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-30 animate-pulse transition-colors duration-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[28rem] sm:h-[28rem] custom:w-[36rem] custom:h-[36rem] bg-indigo-100 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-20 transition-colors duration-300"></div>
        
        {/* Additional background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 backdrop-blur-sm transition-colors duration-300"></div>
        <div className="absolute -top-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 custom:w-80 custom:h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-30 dark:opacity-15 transition-colors duration-300"></div>
        <div className="absolute bottom-1/4 -right-16 w-56 h-56 sm:w-72 sm:h-72 custom:w-88 custom:h-88 bg-violet-100 dark:bg-violet-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-35 dark:opacity-20 transition-colors duration-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto py-8 sm:py-12" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="grid custom:grid-cols-2 gap-8 custom:gap-12 items-center min-h-screen">
          
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 custom:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg dark:shadow-xl transition-colors duration-300">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered Career Companion</span>
            </div>

            {/* Main heading */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl custom:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight">
                <span className="text-gray-900 dark:text-white transition-colors duration-300">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Engineering
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-full custom:max-w-lg transition-colors duration-300">
              From confused first-year to confident job-ready professional. 
              EduTrack360 provides AI-guided learning, real-time testing, 
              mentorship, and placement support for CS, Mechanical, and 
              Electronics students.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                Start Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-gray-700/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch Demo
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Free 7-day trial</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard Image */}
          <div className="relative order-2 custom:order-2 mt-8 custom:mt-0">
            {/* Floating elements */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 custom:-top-8 custom:-left-8 w-8 h-8 sm:w-12 sm:h-12 custom:w-16 custom:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 rounded-xl custom:rounded-2xl shadow-xl dark:shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-all duration-300 z-10">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 custom:w-8 custom:h-8 text-white" />
            </div>
            
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 custom:-top-4 custom:-right-4 w-6 h-6 sm:w-8 sm:h-8 custom:w-12 custom:h-12 bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 rounded-lg custom:rounded-xl shadow-lg dark:shadow-xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-300 z-10">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 custom:w-6 custom:h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-2 -left-1 sm:-bottom-4 sm:-left-2 custom:-bottom-8 custom:-left-4 w-7 h-7 sm:w-10 sm:h-10 custom:w-14 custom:h-14 bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600 rounded-xl custom:rounded-2xl shadow-lg dark:shadow-xl flex items-center justify-center transform rotate-45 hover:rotate-12 transition-all duration-300 z-10">
              <Target className="w-3 h-3 sm:w-5 sm:h-5 custom:w-7 custom:h-7 text-white" />
            </div>

            <div className="absolute top-1/3 -right-2 sm:top-1/2 sm:-right-3 custom:-right-8 w-5 h-5 sm:w-6 sm:h-6 custom:w-10 custom:h-10 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 rounded-full shadow-lg dark:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 z-10">
              <Users className="w-2 h-2 sm:w-3 sm:h-3 custom:w-5 custom:h-5 text-white" />
            </div>

            {/* Dashboard Image Container */}
            <div className="relative">
              {/* Enhanced layered shadows */}
              <div className="absolute inset-0 transform rotate-2 sm:rotate-3 custom:rotate-6 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 custom:translate-x-6 custom:translate-y-6 bg-purple-500/8 dark:bg-purple-400/20 rounded-xl sm:rounded-2xl custom:rounded-3xl blur-2xl transition-colors duration-300"></div>
              <div className="absolute inset-0 transform rotate-2 sm:rotate-3 custom:rotate-6 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 custom:translate-x-4 custom:translate-y-4 bg-blue-500/12 dark:bg-blue-400/25 rounded-xl sm:rounded-2xl custom:rounded-3xl blur-xl transition-colors duration-300"></div>
              <div className="absolute inset-0 transform rotate-2 sm:rotate-3 custom:rotate-6 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 custom:translate-x-2 custom:translate-y-2 bg-indigo-500/8 dark:bg-indigo-400/20 rounded-xl sm:rounded-2xl custom:rounded-3xl blur-lg transition-colors duration-300"></div>
              
              {/* Main image container */}
              <div className="relative w-4/5 sm:w-3/4 custom:w-4/5 mx-auto" style={{ perspective: '800px' }}>
                <div className="[transform-style:preserve-3d] [transform:rotateX(4deg)_rotateY(-6deg)_scale(0.98)] sm:[transform:rotateX(8deg)_rotateY(-12deg)_scale(0.95)] custom:[transform:rotateX(14deg)_rotateY(-18deg)_scale(0.92)] hover:[transform:rotateX(0deg)_rotateY(0deg)_scale(1)] transition-transform duration-700 ease-in-out">
                  {/* Dashboard placeholder */}
                  <div className="w-full h-64 sm:h-80 custom:h-96 rounded-xl sm:rounded-2xl custom:rounded-3xl shadow-xl custom:shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center transition-colors duration-300">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-32 mx-auto transition-colors duration-300"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-24 mx-auto transition-colors duration-300"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-20 mx-auto transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;