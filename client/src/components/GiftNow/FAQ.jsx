import React from 'react';

function Faq({ question }) {
  const q = question.question;
  const a = question.answer;

  return (
    <div className="Faq">
      {q}
      {a}
    </div>
  );
}

export default Faq;
