import React from 'react';
import QuestionWithAnswer from './QuestionWithAnswer';
import QuestionWithoutAnswer from './QuestionWithoutAnswer';

function Questions({ details }) {
  const questions = details.map((question) => {
    if (question.answer) {
      return (
        <div>
          <QuestionWithAnswer questionAsked={question} />
        </div>
      );
    }
    return (
      <div>
        <QuestionWithoutAnswer questionAsked={question} />
      </div>
    );
  });
  return (
    <div className="question">
      {questions}
    </div>
  );
}

export default Questions;
