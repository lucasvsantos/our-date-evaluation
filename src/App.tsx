import React, { useState } from 'react';
import { Heart, Star, User, AlertCircle, CheckCircle } from 'lucide-react';

function App() {
  const [name, setName] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [nameError, setNameError] = useState('');
  const [scoreError, setScoreError] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateName = (inputName: string) => {
    if (inputName.toLowerCase() === 'camila') {
      setNameError('');
      setIsNameValid(true);
      return true;
    } else if (inputName.trim() !== '') {
      setNameError('Quem é você?');
      setIsNameValid(false);
      return false;
    } else {
      setNameError('');
      setIsNameValid(false);
      return false;
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    setName(inputName);
    validateName(inputName);
    setShowSuccess(false);
  };

  const handleScoreSubmit = (selectedScore: number) => {
    if (!isNameValid) {
      setNameError('Por favor, digite "Camila" primeiro! (Se você for a Camila, claro)');
      return;
    }

    setScore(selectedScore);
    
    if (selectedScore >= 1 && selectedScore <= 9) {
      setScoreError('Poxa... Nota inválida, tente novamente. 😉');
      setShowSuccess(false);
    } else if (selectedScore === 10) {
      setScoreError('');
      setShowSuccess(true);
    }
  };

  const resetEvaluation = () => {
    setScore(null);
    setScoreError('');
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-200/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="text-red-500 w-8 h-8 animate-pulse" fill="currentColor" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Date Evaluator
              </h1>
              <Heart className="text-red-500 w-8 h-8 animate-pulse" fill="currentColor" />
            </div>
            <p className="text-gray-600 text-sm">Avalie nosso encontro</p>
          </div>

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Digite seu nome
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Seu nome aqui..."
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                nameError 
                  ? 'border-red-300 focus:ring-red-200 focus:border-red-400' 
                  : isNameValid 
                    ? 'border-green-300 focus:ring-green-200 focus:border-green-400'
                    : 'border-gray-200 focus:ring-pink-200 focus:border-pink-300'
              }`}
            />
            {nameError && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                {nameError}
              </div>
            )}
            {isNameValid && !nameError && (
              <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                <CheckCircle className="w-4 h-4" />
                Oi, Camila! Pronta pra avaliar? 💖
              </div>
            )}
          </div>

          {/* Score Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Como foi nosso encontro? Opinião sincera (1-10)
            </label>
            
            <div className="grid grid-cols-5 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => handleScoreSubmit(num)}
                  disabled={!isNameValid}
                  className={`h-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    score === num
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
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">{scoreError}</span>
                </div>
                <button
                  onClick={resetEvaluation}
                  className="mt-2 text-sm text-red-500 hover:text-red-700 underline"
                >
                  Tente novamente
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
                  <h3 className="text-lg font-bold text-green-800 mb-2">Nota máxima! 🎉</h3>
                  <p className="text-green-700 text-sm">
                    Um 10 perfeito! Que bom que você amou!✨
                  </p>
                  <p className="text-green-700 text-sm">
                    Pronta para o próximo?
                  </p>
                  <div className="flex justify-center mt-4">
                    <Heart className="w-8 h-8 text-red-500 animate-bounce" fill="currentColor" />
                  </div>
                  <img src='https://i.pinimg.com/originals/cf/e2/c7/cfe2c7660c4f3231c29c31b4dd684c27.gif'></img>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4">
            <p>Feito com carinho para um momento especial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;