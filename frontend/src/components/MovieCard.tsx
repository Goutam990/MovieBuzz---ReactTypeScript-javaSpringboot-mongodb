
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  duration: number;
  genre: string[];
  releaseDate: string;
  language: string;
  showTimes?: string[];
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster,
  rating,
  duration,
  genre,
  releaseDate,
  language,
  showTimes = []
}) => {
  return (
    <Card className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 md:top-3 left-2 md:left-3">
          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-xs">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {rating}
          </Badge>
        </div>
        <div className="absolute top-2 md:top-3 right-2 md:right-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
            {language}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-3 md:p-4 flex-1 flex flex-col">
        <div className="space-y-2 md:space-y-3 flex-1">
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
              {title}
            </h3>
            <div className="flex items-center text-xs md:text-sm text-gray-600 mt-1 space-x-2 md:space-x-3">
              <div className="flex items-center">
                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                {duration} min
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                {new Date(releaseDate).getFullYear()}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {genre.slice(0, 2).map((g, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {g}
              </Badge>
            ))}
            {genre.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{genre.length - 2}
              </Badge>
            )}
          </div>

          {showTimes.length > 0 && (
            <div className="space-y-2 flex-1">
              <p className="text-xs md:text-sm font-medium text-gray-700">Show Times:</p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {showTimes.slice(0, 3).map((time, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs">
                    {time}
                  </Badge>
                ))}
                {showTimes.length > 3 && (
                  <Badge className="bg-gray-100 text-gray-600 text-xs">
                    +{showTimes.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>

        <Link 
          to={`/movies/${id}`}
          className="block w-full mt-3 md:mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-3 md:px-4 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] text-xs md:text-sm"
        >
          Book Now
        </Link>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
