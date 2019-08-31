import React from 'react';

function QuestionWithAnswer({ questionAsked }) {
  const { question } = questionAsked;
  const { answer } = questionAsked;
  const { asker } = questionAsked;
  const { dateAsked } = questionAsked;
  const { dateAnswered } = questionAsked;
  const { helpfulCount } = questionAsked;
  const { unhelpfulCount } = questionAsked;
  const { nameOfResponder } = questionAsked;
  const { targetTeamMember } = questionAsked;

  if (targetTeamMember) {
    var teamText = 'Target Team Member';
  } else {
    teamText = '';
  }

  return (
    <div className="questionWithAnswer">
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
      <p>
        <b>A:</b>
        {answer}
      </p>
      <p>
        {nameOfResponder}
        {' '}
-
        {' '}
        {dateAnswered}
        {' '}
        <a>
Helpful(
          {helpfulCount}
)
        </a>
        {' '}
        <a>
Unhelpful(
          {unhelpfulCount}
)
        </a>
        {' '}
        <a>Report</a>
      </p>
      {teamText}
    </div>
  );
}

export default QuestionWithAnswer;
