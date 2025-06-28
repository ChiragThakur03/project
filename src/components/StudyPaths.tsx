import React, { useState } from 'react';
import { Laptop, Cpu, Settings, ChevronDown, ChevronUp } from 'lucide-react';

const StudyPaths = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const branches = [
    {
      id: 'cse',
      title: 'CSE',
      subtitle: 'Computer Science & Engineering',
      icon: Laptop,
      color: 'from-blue-500 to-cyan-500',
      darkColor: 'from-blue-400 to-cyan-400',
      cards: [
        'Structured Semester Learning',
        'GATE Preparation Strategies',
        'Placement Preparation Guide',
        'Development Skills & Projects',
        'Problem-Solving & Practice Sets',
        'Personalized Career Roadmap'
      ]
    },
    {
      id: 'ece',
      title: 'ECE',
      subtitle: 'Electronics & Communication Engineering',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      darkColor: 'from-purple-400 to-pink-400',
      cards: [
        'Curriculum Insights & Syllabus Flow',
        'GATE & Core Exam Readiness',
        'Internship & Placement Prep',
        'Hands-on Electronics Projects',
        'Circuit Solving & Aptitude Practice',
        'Career Pathways in ECE'
      ]
    },
    {
      id: 'me',
      title: 'ME',
      subtitle: 'Mechanical Engineering',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      darkColor: 'from-orange-400 to-red-400',
      cards: [
        'Term-wise Academic Planning',
        'GATE & PSU Exam Focus',
        'Job-Oriented Training Guide',
        'CAD/CAE Tools & Projects',
        'Mechanical Aptitude Practice',
        'Mechanical Career Blueprint'
      ]
    }
  ];

  const handleBranchClick = (branchId: string) => {
    setSelectedBranch(selectedBranch === branchId ? null : branchId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/50 rounded-full px-4 py-2 shadow-lg dark:shadow-xl mb-6 transition-colors duration-300">
            <Settings className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Choose Your Path</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Study Paths
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Select your engineering branch to explore tailored learning paths designed for your success
          </p>
        </div>

        {/* Branch Cards with Beautiful Bottom-to-Top Gradient Hover */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {branches.map((branch) => {
            const IconComponent = branch.icon;
            const isSelected = selectedBranch === branch.id;
            
            return (
              <div
                key={branch.id}
                onClick={() => handleBranchClick(branch.id)}
                className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                  isSelected ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div className={`relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl dark:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 overflow-hidden ${
                  isSelected 
                    ? 'ring-2 ring-purple-500 dark:ring-purple-400 shadow-2xl dark:shadow-purple-500/25' 
                    : 'hover:shadow-2xl dark:hover:shadow-gray-700/25 hover:border-white dark:hover:border-white/50'
                }`}>
                  
                  {/* Beautiful bottom-to-top gradient overlay - starts from theme colors at bottom, fades to white at top */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white from-30% via-white via-30% to-blue-500 dark:from-gray-800 dark:via-gray-800 dark:to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl lg:rounded-3xl"></div>
                  
                  {/* Subtle shine effect that sweeps across on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${branch.color} dark:bg-gradient-to-br dark:${branch.darkColor} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:backdrop-blur-sm`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-500 group-hover:text-black dark:group-hover:text-white">
                        {branch.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4 transition-all duration-500 group-hover:text-black dark:group-hover:text-white/90">
                        {branch.subtitle}
                      </p>
                      
                      {/* Expand indicator */}
                      <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:text-black dark:group-hover:text-white transition-all duration-500">
                        <span className="text-sm">
                          {isSelected ? 'Hide Details' : 'Explore Path'}
                        </span>
                        {isSelected ? (
                          <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile tap effect - subtle gradient pulse on touch */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-blue-500/20 to-white/10 dark:from-purple-500/20 dark:via-blue-400/20 dark:to-gray-800/10 opacity-0 rounded-2xl lg:rounded-3xl transition-opacity duration-200 active:opacity-100 md:hidden"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Section */}
        {selectedBranch && (
          <div className="animate-in slide-in-from-top-4 duration-500">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl dark:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {branches.find(b => b.id === selectedBranch)?.title} Learning Path
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Comprehensive modules designed for your success
                </p>
              </div>

              {/* Sub Cards Grid with Beautiful Gradient Hover Effects */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {branches.find(b => b.id === selectedBranch)?.cards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg dark:shadow-xl border border-gray-200/50 dark:border-gray-600/50 transform transition-all duration-500 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 overflow-hidden
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-2xl
                    active:scale-95 active:translate-y-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Beautiful gradient overlay that appears on hover - matches website theme */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-white dark:from-blue-500 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl lg:rounded-2xl"></div>
                    
                    {/* Subtle shine effect that sweeps across on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-white/20 group-hover:backdrop-blur-sm group-hover:scale-110 transition-all duration-500">
                        <span className="text-white font-bold text-sm transition-transform duration-300">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                          {card}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                          Comprehensive module with practical approach
                        </p>
                      </div>
                    </div>

                    {/* Mobile tap effect - subtle gradient pulse on touch */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-600/20 opacity-0 rounded-xl lg:rounded-2xl transition-opacity duration-200 active:opacity-100 md:hidden"></div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                  Start {branches.find(b => b.id === selectedBranch)?.title} Journey
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPaths;