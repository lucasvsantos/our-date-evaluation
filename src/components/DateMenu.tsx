import { Calendar, Heart, Star } from 'lucide-react';
import { DateEvaluation } from '../types';

interface DateMenuProps {
  dates: DateEvaluation[];
  currentDateId: string;
  onDateSelect: (dateId: string) => void;
}

export function DateMenu({ dates, currentDateId, onDateSelect }: DateMenuProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm border-b border-pink-200/50 p-4 mb-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-pink-600" />
          <h2 className="text-lg font-semibold text-gray-800">Nossos Encontros</h2>
          <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {dates.map((date) => (
            <button
              key={date.id}
              onClick={() => onDateSelect(date.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                currentDateId === date.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : date.isEvaluated
                    ? 'bg-green-100 text-green-800 border-2 border-green-200 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{date.displayDate}</span>
                {date.isEvaluated && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                    <span className="text-xs font-bold">{date.score}</span>
                  </div>
                )}
                {!date.isEvaluated && (
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}