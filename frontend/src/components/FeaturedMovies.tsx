
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Button } from '@/components/ui/button';

const FeaturedMovies = () => {
  // Sample movie data - in a real app, this would come from an API
  const featuredMovies = [
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
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            🎬 Now Showing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Movies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the hottest movies playing in theaters near you
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/movies">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              View All Movies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
