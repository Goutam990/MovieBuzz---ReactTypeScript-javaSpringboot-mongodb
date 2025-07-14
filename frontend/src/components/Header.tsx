// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Search, User, Menu, X, Film } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import SignIn from "./Signin";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const [showSignin, setShowSignin] = useState(false);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/movies?search=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   return (
//     <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-14 md:h-16">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-gray-900"
//           >
//             <Film className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
//               MovieBuzz
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             <Link
//               to="/movies"
//               className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
//             >
//               Movies
//             </Link>
//             <Link
//               to="/theaters"
//               className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
//             >
//               Theaters
//             </Link>
//             <Link
//               to="/bookings"
//               className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
//             >
//               My Bookings
//             </Link>
//           </nav>

//           {/* Search Bar - Hidden on mobile */}
//           <form
//             onSubmit={handleSearch}
//             className="hidden md:flex items-center max-w-xs lg:max-w-md xl:max-w-lg w-full mx-4 lg:mx-8"
//           >
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <Input
//                 type="text"
//                 placeholder="Search movies..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm"
//               />
//             </div>
//           </form>

//           {/* User Actions */}
//           <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-xs lg:text-sm"
//               onClick={() => setShowSignin(true)}
//             >
//               Sign In
//             </Button>

//             <Link to="/register">
//               <Button
//                 size="sm"
//                 className="bg-blue-600 hover:bg-blue-700 text-xs lg:text-sm"
//               >
//                 Sign Up
//               </Button>
//             </Link>
//             <Button variant="outline" size="sm" className="p-2">
//               <User className="h-4 w-4" />
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
//           >
//             {isMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 bg-white">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {/* Mobile Search */}
//               <form onSubmit={handleSearch} className="mb-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                   <Input
//                     type="text"
//                     placeholder="Search movies..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10 w-full"
//                   />
//                 </div>
//               </form>

//               {/* Mobile Navigation Links */}
//               <Link
//                 to="/movies"
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Movies
//               </Link>
//               <Link
//                 to="/theaters"
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Theaters
//               </Link>
//               <Link
//                 to="/bookings"
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 My Bookings
//               </Link>

//               {/* Mobile User Actions */}
//               <div className="pt-4 border-t border-gray-200 space-y-2">
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="w-full justify-start"
//                   >
//                     Sign In
//                   </Button>
//                 </Link>
//                 <Link to="/register" onClick={() => setIsMenuOpen(false)}>
//                   <Button
//                     size="sm"
//                     className="w-full bg-blue-600 hover:bg-blue-700"
//                   >
//                     Sign Up
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* Sign In Modal */}
//       {showSignin && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg relative w-full max-w-md">
//             <button
//               onClick={() => setShowSignin(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
//               aria-label="Close Sign In Modal"
//             >
//               &times;
//             </button>
//             <SignIn
//               onSwitchToSignUp={() => {
//                 setShowSignin(false);
//                 // Optionally: setShowSignup(true);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Menu, X, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movies?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-gray-900"
          >
            <Film className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
              MovieBuzz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/movies"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
            >
              Movies
            </Link>
            <Link
              to="/theaters"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
            >
              Theaters
            </Link>
            <Link
              to="/bookings"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
            >
              My Bookings
            </Link>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center max-w-xs lg:max-w-md xl:max-w-lg w-full mx-4 lg:mx-8"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm"
              />
            </div>
          </form>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-xs lg:text-sm">
                Sign In
              </Button>
            </Link>

            <Link to="/signup"> {/* Changed from /register to /signup */}
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-xs lg:text-sm"
              >
                Sign Up
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="p-2">
              <User className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <Link
                to="/movies"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
              <Link
                to="/theaters"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Theaters
              </Link>
              <Link
                to="/bookings"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Bookings
              </Link>

              {/* Mobile User Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}> {/* Changed from /register to /signup */}
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;