import { useState } from 'react';
import { Heart, Star, AlertCircle, Clock } from 'lucide-react';
import { DateEvaluation } from '../types';

interface DateEvaluatorProps {
  currentDate: DateEvaluation;
  onScoreUpdate: (dateId: string, score: number) => void;
}

export function DateEvaluator({ currentDate, onScoreUpdate }: DateEvaluatorProps) {
  const [tempScore, setTempScore] = useState<number | null>(null);
  const [scoreError, setScoreError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Verifica se a avaliação está disponível (dia seguinte ao encontro)
  const isEvaluationAvailable = () => {
    if (currentDate.isEvaluated) return true;
    
    const dateOfDate = new Date(currentDate.date);
    const today = new Date();
    const dayAfterDate = new Date(dateOfDate);
    dayAfterDate.setDate(dayAfterDate.getDate() + 1);
    
    // Remove as horas para comparar apenas as datas
    today.setHours(0, 0, 0, 0);
    dayAfterDate.setHours(0, 0, 0, 0);
    
    return today >= dayAfterDate;
  };

  const handleScoreSubmit = (selectedScore: number) => {
    setTempScore(selectedScore);
    setScoreError('');
    setShowSuccess(true);
    onScoreUpdate(currentDate.id, selectedScore);
  };

  const resetEvaluation = () => {
    setTempScore(null);
    setScoreError('');
    setShowSuccess(false);
  };

  // Se o encontro já foi avaliado, mostra apenas a nota
  if (currentDate.isEvaluated) {
    return (
      <div className="text-center">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 rounded-full p-4">
              <Star className="w-8 h-8 text-white" fill="currentColor" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            Encontro Avaliado! 💕
          </h3>
          <p className="text-green-700 mb-4">
            Data: {currentDate.displayDate}
          </p>
          <div className="text-4xl font-bold text-green-600 mb-2">
            {currentDate.score}/10
          </div>
          <p className="text-green-600">
            {currentDate.successMessage || 'Que encontro maravilhoso! 💕'}
          </p>
          <br></br>
          <div className="flex justify-center mb-4">
            <img 
              src={currentDate.celebrationGif || './michael-scott-wow.gif'} 
              alt="Celebration GIF" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  // Se a avaliação não está disponível ainda
  if (!isEvaluationAvailable()) {
    const dateOfDate = new Date(currentDate.date);
    const dayAfterDate = new Date(dateOfDate);
    dayAfterDate.setDate(dayAfterDate.getDate() + 1);
    
    return (
      <div className="text-center">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="flex justify-center mb-4">
            <div className="bg-amber-500 rounded-full p-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-amber-800 mb-2">
            Avaliação Ainda Não Disponível ⏰
          </h3>
          <p className="text-amber-700 mb-4">
            Encontro: {currentDate.displayDate}
          </p>
          <p className="text-amber-500 text-sm mt-2">
            Aguarde o dia seguinte ao encontro para avaliar! ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header do encontro atual */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="text-red-500 w-8 h-8 animate-pulse" fill="currentColor" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Avaliação do Encontro
          </h1>
          <Heart className="text-red-500 w-8 h-8 animate-pulse" fill="currentColor" />
        </div>
        <p className="text-gray-600 text-lg font-medium">{currentDate.displayDate}</p>
        <p className="text-gray-500 text-sm">Como foi nosso encontro romântico?</p>
      </div>

      {/* Seleção da nota */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center justify-center gap-2">
          <Star className="w-4 h-4" />
          Como foi o encontro? (1-10)
        </label>
        
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => handleScoreSubmit(num)}
              className={`h-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                tempScore === num
                  ? num === 10
                    ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 text-gray-700'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {scoreError && (
          <div className="mb-4 p-4 bg-red-50 rounded-xl border border-red-200">
            <div className="flex items-center justify-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">{scoreError}</span>
            </div>
            <button
              onClick={resetEvaluation}
              className="mt-2 text-sm text-red-500 hover:text-red-700 underline"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {showSuccess && (
          <div className="mb-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Nota Perfeita! 🎉</h3>
              <p className="text-green-700 text-sm">
                {currentDate.successMessage || 'Um 10 perfeito! Este encontro foi absolutamente mágico! ✨'}
              </p>
              <div className="flex justify-center mt-4">
                <Heart className="w-8 h-8 text-red-500 animate-bounce" fill="currentColor" />
              </div>
              <div className="flex justify-center mb-4">
                <img 
                  src={currentDate.celebrationGif} 
                  alt="Celebration GIF" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}