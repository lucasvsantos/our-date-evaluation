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
    score: 10,
    isEvaluated: true,
    successMessage: 'Esse com certeza foi o melhor date da vida ❤️',
    celebrationGif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW5wNGM0aXpteDg0bHBlZnIycmF2dXJnejA4NDBhM2ZicnFsMDl0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OJ0NYhdemsSoF4FCM8/giphy.gif',
    tags: ['você acredita em mágica?']
  },
  {
    id: 'date-5',
    date: '2025-09-27',
    displayDate: '27 Set 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Acho incrível a forma como falamos de tudo, sobre tudo e com naturalidade ❤️',
    celebrationGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTlseGVtZDZlNmpsNm1pY3JubWhjcXVidmJza25pZTFucHByeDA2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VMO6qeIbr7JRLnLTGw/giphy.gif',
    tags: ['air hockey', '"...e a porta se trancou!"']
  },
  {
    id: 'date-6',
    date: '2025-10-04',
    displayDate: '04 Out 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Um date mais surpreendente do que o outro ❤️',
    celebrationGif: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZDRqcTF6eXlkOGQwb3Fndm40dXV0NG84eHFiaWVodTRzcjNqYTQzNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2TCSSVEKML8NBogM8o/giphy.gif',
    tags: ['tios perigosos']
  },
  {
    id: 'date-7',
    date: '2025-10-10',
    displayDate: '10 Out 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Esse sim foi o melhor date de todos ❤️',
    celebrationGif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnIwbmJ0cWt1ZHV6eGEyY2ozMHcwY2o1dWlwZWNlZ3lyMDI4emk2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4J8UawF6eSH1KL9l53/giphy.gif',
    tags: ['primeiro date oficial no cinema']
  },
  {
    id: 'date-8',
    date: '2025-10-23',
    displayDate: '23 Out 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Os comediantes foram engraçados, mas eu sou mais...',
    celebrationGif: 'https://66.media.tumblr.com/abf5505bd5e3381e40fc0fcd42e98cd5/tumblr_mm87tstRxX1qjsyx0o1_500.gif',
    tags: ['primeiro date no teatro']
  },
  {
    id: 'date-9',
    date: '2025-11-01',
    displayDate: '01 Nov 2025',
    score: 10,
    isEvaluated: true,
    successMessage: 'Nosso date mais longo, eu amei ❤️',
    celebrationGif: 'https://media1.popsugar-assets.com/files/thumbor/vIcqvKLC9Rt6VQbGX6PeTMqNvAM=/fit-in/500x282/top/filters:format_auto():upscale()/2013/03/10/3/192/1922283/33e61069d2ae9e45_url.gif',
    tags: ['muitas voltas na paulista']
  },
  {
    id: 'date-10',
    date: '2025-11-05',
    displayDate: '05 Nov 2025',
    score: null,
    isEvaluated: false,
    successMessage: '❤️❤️❤️❤️ O grande dia em que começamos a namorar, especificamente às 22h30 ❤️❤️❤️❤️',
    celebrationGif: '',
    tags: ['']
  },
  {
    id: 'date-11',
    date: '2025-11-14',
    displayDate: '14 Nov 2025',
    score: null,
    isEvaluated: false,
    successMessage: '',
    celebrationGif: '',
    tags: ['']
  },
  {
    id: 'date-11',
    date: '2025-11-20',
    displayDate: '20 Nov 2025',
    score: null,
    isEvaluated: false,
    successMessage: '',
    celebrationGif: '',
    tags: ['']
  },
  {
    id: 'date-11',
    date: '2025-11-23',
    displayDate: '23 Nov 2025',
    score: null,
    isEvaluated: false,
    successMessage: 'O dia em que fomos no festival',
    celebrationGif: '',
    tags: ['']
  },
  {
    id: 'date-999',
    date: 'Aguardando próximo date...',
    displayDate: 'Aguardando data...',
    score: null,
    isEvaluated: false,
    successMessage: '',
    celebrationGif: '',
    tags: []
  }
];
