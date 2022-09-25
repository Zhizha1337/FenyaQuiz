import './index.scss';
import React from "react";


const pic = './src/fenya.png'
const questions = [
  {
    title: 'Феня - это ... ?',
    variants: ['Кошка', 'Собака', 'Слониха'],
    correct: 0,
  },
  {
    title: 'Феня красивая?',
    variants: ['Да', 'Очень', 'Невероятно'],
    correct: 2,
  },
  {
    title: 'Какие у фени уши?',
    variants: [
      'Масенькие!',
      'Нормальные, как у всех',
      'Просто огромные...',
    ],
    correct: 2,
  },
    {
        title: 'Какой элемент одежды всегда на Фене?',
        variants: [
            'Носки Adidas',
            'Воротничок',
            'Кепка с вентилятором',
        ],
        correct: 1,
    },

     {
        title: 'Что Феня любит делать БОЛЬШЕ всего?',
        variants: [
            'Копать Алоэ',
            'Читать книги',
            'Вылизывать себе попу',

        ],
        correct: 0,
    },
    {
        title: 'Что Феня любит делать МЕНЬШЕ всего?',
        variants: [
            'Читать книги',
            'Вылизывать себе попу',
            'Копать Алоэ',
        ],
        correct: 1,
    },
    {
        title: 'Подпольная кличка',
        variants: [
            'Фея',
            'Срака',
            'Патевна',
        ],
        correct: 0,
    },
];

function Result({correct}) {
  return (

    <div className="result">
        {(correct < 3) ? <h2>{correct} из {questions.length} Вы вообще не знаете Феню... Стыдно?<p> <img style={{borderRadius:'30px'}} src={require('./zhopa.jpg')}/> </p></h2> :
            (correct < 7) ? <h2>{correct} из {questions.length} Вы хорошо знаете Феню! Разрешается погладить её один раз.
                            <p> <img style={{borderRadius:'30px'}} src={require('./fenya.png')}/> </p> </h2> :
            <h2>{correct} из {questions.length} Вы лучше всех знаете Феню, скорее всего вы её мама! &#128525; </h2>
        }
      <a href='/'><button>Попробовать снова</button></a>
    </div>
  );
}

function Intro() {
    return (
        <div className="result">
            <h2 style={{fontSize:'30px', marginBottom:'30px'}}>Хорошо ли вы знаете Феню? &#129300;</h2>
        </div>
    );
}

function Game( {step, question, onClickVariant} )  {
    const percentage = (Math.round((step / questions.length) * 100)) + '%'
    console.log(percentage);
    return (
    <>
      <div className="progress">
        <div style={{ width: (percentage) }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {question.variants.map((text, index) =>(
                  <li onClick={() => onClickVariant(index)} key={text}>
                      {text}
                  </li>
          ))}
      </ul>
    </>
  );
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const  question = questions[step];

    const onClickVariant = (index) => {
        console.log(step, index, correct)
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };

  return (

    <div className="App">
        <Intro/>
        {step !== questions.length
            ? <Game step={step} question={question} onClickVariant={onClickVariant}/>
            :  <Result correct={correct}/>
        }

    </div>
  );
}

export default App;
