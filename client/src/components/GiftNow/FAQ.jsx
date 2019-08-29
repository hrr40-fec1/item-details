function Faq(props) {
  var question = props.question.question
  var answer = props.question.answer

  return(
    <div>
    {question}
    {answer}
    </div>
  )
}

export default Faq;
