import React from 'react';
import moment from 'moment';

function QuestionWithoutAnswer({ questionAsked }) {
  const { question, asker, dateAsked } = questionAsked;
  const relativeDate = moment({dateAsked}).fromNow();

  return (
    <div className="questionWithoutAnswer">
      <p>
        <b>
Q:
          <b>{question}</b>
        </b>
      </p>
      <p className='askerAndDateAsked'>
        {asker}
        {' '}
—
        {' '}
        {relativeDate}
      </p>
      <button className='answerIt'>Answer it</button>
    </div>
  );
}

export default QuestionWithoutAnswer;
