import React from "react";
import { Link } from "react-router-dom";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -rotate-12"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 md:top-40 right-5 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 md:-bottom-8 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-16">
        <div className="space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 text-yellow-400" />
            <span className="hidden sm:inline">
              Experience Cinema Like Never Before
            </span>
            <span className="sm:hidden">Cinema Experience</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block">Book Your Perfect</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Movie Experience
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              Discover the latest blockbusters, select your ideal seats in
              real-time, and enjoy seamless booking with MovieBuzz.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4 px-4">
            <Link to="/movies" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Browse Movies
              </Button>
            </Link>
            <Link to="/theaters" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
              >
                Find Theaters
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                50+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">
                Movies Playing
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                25+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">
                Theater Locations
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                1M+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
