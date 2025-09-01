import { useState } from 'react';
import { DateMenu } from './components/DateMenu';
import { DateEvaluator } from './components/DateEvaluator';
import { initialDates } from './data/dates';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentDateId: initialDates[0]?.id || '',
    evaluations: initialDates
  });

  const currentDate = appState.evaluations.find(date => date.id === appState.currentDateId);

  const handleDateSelect = (dateId: string) => {
    setAppState(prev => ({
      ...prev,
      currentDateId: dateId
    }));
  };

  const handleScoreUpdate = (dateId: string, score: number) => {
    setAppState(prev => ({
      ...prev,
      evaluations: prev.evaluations.map(date =>
        date.id === dateId
          ? { ...date, score, isEvaluated: true }
          : date
      )
    }));
  };

  if (!currentDate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Nenhum encontro encontrado</h1>
          <p className="text-gray-600">Adicione encontros no arquivo src/data/dates.ts</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100">
      <DateMenu 
        dates={appState.evaluations}
        currentDateId={appState.currentDateId}
        onDateSelect={handleDateSelect}
      />
      
      <div className="flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-200/30">
            <DateEvaluator 
              currentDate={currentDate}
              onScoreUpdate={handleScoreUpdate}
            />
            
            {/* Footer */}
            <div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4 mt-6">
              <p>Feito com 💕 para registrar nossos momentos</p>
              <br></br>
              <p>De: Lucas</p>
              <p>Para: Camila</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;