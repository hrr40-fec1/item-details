import React from 'react';
import QuestionWithAnswer from './QuestionWithAnswer.jsx';
import QuestionWithoutAnswer from './QuestionWithoutAnswer.jsx'

function Questions(props) {
  var questions = props.details.map(question => {
    if (question.answer) {
      return(
      <div>
        <QuestionWithAnswer question={question}/>
      </div>
    )
    } else {
      return(
      <div>
      <QuestionWithoutAnswer question={question} />
      </div>
     )
    }
  })
  return(
    <div className="question">
    {questions}
    </div>
  )
}

export default Questions;
