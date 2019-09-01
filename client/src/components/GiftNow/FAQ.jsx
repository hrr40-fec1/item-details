import React from 'react';

function Faq({ question }) {
  const q = question.question;
  const a = question.answer;

  return (
    <div className="Faq">
      <div className='faqQuestion'>{q}</div>
      <div className='faqAnswer'>{a}</div>
    </div>
  );
}

export default Faq;
