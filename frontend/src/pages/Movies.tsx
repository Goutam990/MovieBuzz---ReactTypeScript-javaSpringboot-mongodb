
import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  // Sample movies data
  const movies = [
    {
      id: '1',
      title: 'Avatar: The Way of Water',
      poster: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
      rating: 8.1,
      duration: 192,
      genre: ['Sci-Fi', 'Adventure', 'Drama'],
      releaseDate: '2022-12-16',
      language: 'English',
      showTimes: ['10:00 AM', '2:30 PM', '6:45 PM', '10:15 PM']
    },
    {
      id: '2',
      title: 'Top Gun: Maverick',
      poster: 'https://images.unsplash.com/photo-1489599735862-3a3a6b72b5df?w=400&h=600&fit=crop',
      rating: 8.3,
      duration: 131,
      genre: ['Action', 'Drama'],
      releaseDate: '2022-05-27',
      language: 'English',
      showTimes: ['11:30 AM', '3:00 PM', '7:30 PM']
    },
    {
      id: '3',
      title: 'Spider-Man: No Way Home',
      poster: 'https://images.unsplash.com/photo-1635863138275-d9864d3e8049?w=400&h=600&fit=crop',
      rating: 8.4,
      duration: 148,
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      releaseDate: '2021-12-17',
      language: 'English',
      showTimes: ['12:00 PM', '4:15 PM', '8:30 PM']
    },
    {
      id: '4',
      title: 'Dune',
      poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
      rating: 8.0,
      duration: 155,
      genre: ['Sci-Fi', 'Adventure', 'Drama'],
      releaseDate: '2021-10-22',
      language: 'English',
      showTimes: ['1:00 PM', '5:30 PM', '9:00 PM']
    },
    {
      id: '5',
      title: 'The Batman',
      poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
      rating: 7.8,
      duration: 176,
      genre: ['Action', 'Crime', 'Drama'],
      releaseDate: '2022-03-04',
      language: 'English',
      showTimes: ['2:00 PM', '6:00 PM', '9:45 PM']
    },
    {
      id: '6',
      title: 'Doctor Strange: Multiverse of Madness',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
      rating: 6.9,
      duration: 126,
      genre: ['Action', 'Adventure', 'Fantasy'],
      releaseDate: '2022-05-06',
      language: 'English',
      showTimes: ['11:00 AM', '3:30 PM', '7:00 PM']
    }
  ];

  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Fantasy', 'Crime'];
  const languages = ['English', 'Hindi', 'Spanish', 'French'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || movie.genre.includes(selectedGenre);
    const matchesLanguage = selectedLanguage === 'all' || movie.language === selectedLanguage;
    return matchesSearch && matchesGenre && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Now Showing
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Discover and book tickets for the latest movies
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6 md:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Search */}
            <div className="relative sm:col-span-2 lg:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm md:text-base"
              />
            </div>

            {/* Genre Filter */}
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="text-sm md:text-base">
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="all">All Genres</SelectItem>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Language Filter */}
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="text-sm md:text-base">
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>{language}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="text-sm md:text-base">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="release">Release Date</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
            {selectedGenre !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer text-xs md:text-sm" onClick={() => setSelectedGenre('all')}>
                {selectedGenre} ✕
              </Badge>
            )}
            {selectedLanguage !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer text-xs md:text-sm" onClick={() => setSelectedLanguage('all')}>
                {selectedLanguage} ✕
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="cursor-pointer text-xs md:text-sm" onClick={() => setSearchQuery('')}>
                "{searchQuery}" ✕
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-2">
          <p className="text-gray-600 text-sm md:text-base">
            Showing {filteredMovies.length} of {movies.length} movies
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-xs md:text-sm text-gray-600">Filter results</span>
          </div>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No movies found</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('all');
                setSelectedLanguage('all');
              }}
              className="text-sm md:text-base"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
