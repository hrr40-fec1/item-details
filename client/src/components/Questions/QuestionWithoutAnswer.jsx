import React from 'react';

function QuestionWithoutAnswer({ questionAsked }) {
  const { question } = questionAsked;
  const { asker } = questionAsked;
  const { dateAsked } = questionAsked;

  return (
    <div className="questionWithoutAnswer">
      <p>
        <b>
Q:
          {question}
        </b>
      </p>
      <p>
        {asker}
        {' '}
-
        {' '}
        {dateAsked}
      </p>
    </div>
  );
}

export default QuestionWithoutAnswer;
