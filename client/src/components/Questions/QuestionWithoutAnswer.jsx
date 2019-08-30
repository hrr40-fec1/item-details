import React from 'react';

function QuestionWithoutAnswer(props) {
  var item = props.question

  var question = item.question
  var asker = item.asker
  var dateAsked = item.dateAsked

  return (
    <div className="questionWithoutAnswer">
      <p><b>Q: {question}</b></p>
      <p>{asker} - {dateAsked}</p>
    </div>
  )
}

export default QuestionWithoutAnswer;
