import React from 'react';
import Faq from './FAQ';

function NittyGrittyDetails() {
  const questionList = [
    {
      question: "Do I need to know the recipient's preferred color, size, style or shipping address?",
      answer: 'No, your gift recipient has the option to choose their preferred color, size and style when they accept the gift. They will also provide their shipping address.',
    },
    {
      question: 'How does the recipient receive my gift?',
      answer: 'Your gift recipient receives an email notifying them of your gift. They follow a link from the email to our website, where a gift box opens to reveal a gift. They then get to customize and accept your gift, or they can easily exchange it, all before it ships to them.',
    },
    {
      question: 'Can I schedule my gift to be sent on a specific date?',
      answer: "Yes, you can choose the date that the gift email is sent to the recipient. While filling in the recipient's personal info, choose a date up to 12 months in the future.",
    },
  ];

  const questionsToRender = questionList.map((question) => <Faq question={question} />);
  return (
    <div className="nittyGrittyDetails">
      <h2>The nitty-gritty details</h2>
      {questionsToRender}
    </div>
  );
}

export default NittyGrittyDetails;
