import { DateEvaluation } from '../types';

export const initialDates: DateEvaluation[] = [
  {
    id: 'date-1',
    date: '2025-08-29',
    displayDate: '29 Ago 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Que bom que você amou! Pronta para o próximo? ❤️',
    celebrationGif: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2drNjh5dGg0cTNvemFhZWVobzZ2Nnd3ZWxlN3VyOXc3MDM0aDFxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4HrB1fMRtX6BADf1cY/giphy.gif'
  },
  {
    id: 'date-2',
    date: '2025-09-06',
    displayDate: '06 Set 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Adorei nosso encontro e nossa conversa, ansioso para mais! ❤️',
    celebrationGif: 'https://media.tenor.com/WYcP64486i8AAAAM/h2di-michael-shocked-happy.gif',
    tags: ['moço, tira essa vela daqui', 'paul is dead', 'avril lavigne is dead', 'valet invasivo...']
  },
  {
    id: 'date-3',
    date: '2025-09-14',
    displayDate: '14 Set 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Incrível como o melhor encontro é sempre o próximo ❤️',
    celebrationGif: 'https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dm84eTYzeHM1MXZuMWV5Y2IyYTAyZHF1cWhtOWt4cGd5anFhcHJuZSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/fHMAxZODkH5xMKJGne/200.webp',
    tags: ['cárcere privado', 'ultra high', 'educação positiva']
  },
  {
    id: 'date-4',
    date: '2025-09-19',
    displayDate: '19 Set 2025',
    score: null,
    isEvaluated: false,
    successMessage: 'Esse com certeza foi o melhor date da vida ❤️',
    celebrationGif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW5wNGM0aXpteDg0bHBlZnIycmF2dXJnejA4NDBhM2ZicnFsMDl0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OJ0NYhdemsSoF4FCM8/giphy.gif',
    tags: ['você acredita em mágica?']
  },
  {
    id: 'date-5',
    date: 'Aguardando data...',
    displayDate: 'Aguardando data...',
    score: null,
    isEvaluated: false,
    successMessage: '',
    celebrationGif: '',
    tags: ['você acredita em mágica?']
  }
  // Adicionar novos encontros aqui seguindo o mesmo padrão
  // {
  //   id: 'date-4',
  //   date: '2024-04-20',
  //   displayDate: '20 Abr 2024',
  //   score: null,
  //   isEvaluated: false,
  //   successMessage: 'Mensagem personalizada',
  //   celebrationGif: './gif-path.gif'
  // }
];