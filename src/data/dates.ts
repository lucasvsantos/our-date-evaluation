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
    id: 'date-3',
    date: '2025-09-06',
    displayDate: '06 Set 2025',
    score: null, // Ainda não avaliado
    isEvaluated: false,
    successMessage: 'Adorei nosso encontro e nossa conversa, ansioso para mais! ❤️',
    celebrationGif: 'https://media.tenor.com/WYcP64486i8AAAAM/h2di-michael-shocked-happy.gif'
  },
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