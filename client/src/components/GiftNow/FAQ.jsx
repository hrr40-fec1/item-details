import React from 'react';

function Faq(props) {
  var question = props.question.question
  var answer = props.question.answer

  return(
    <div className="Faq">
    {question}
    {answer}
    </div>
  )
}

export default Faq;
