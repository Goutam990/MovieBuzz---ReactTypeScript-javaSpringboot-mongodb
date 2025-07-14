
import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl md:text-2xl font-bold">
              <Film className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MovieBuzz
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Your ultimate destination for seamless movie booking experiences. Discover, book, and enjoy!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Movies */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Movies</h3>
            <ul className="space-y-2">
              <li><Link to="/movies" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Now Showing</Link></li>
              <li><Link to="/movies?filter=upcoming" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Coming Soon</Link></li>
              <li><Link to="/movies?genre=action" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Action Movies</Link></li>
              <li><Link to="/movies?genre=comedy" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Comedy Movies</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">FAQ</Link></li>
              <li><Link to="/cancellation" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Sign In</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Create Account</Link></li>
              <li><Link to="/bookings" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">My Bookings</Link></li>
              <li><Link to="/profile" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Profile Settings</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2024 MovieBuzz. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
