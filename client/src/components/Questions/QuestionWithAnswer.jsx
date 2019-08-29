function QuestionWithAnswer(props) {
  var item = props.question

  var question = item.question
  var answer = item.answer
  var asker = item.asker
  var dateAsked = item.dateAsked
  var dateAnswered = item.dateAnswered
  var helpfulCount = item.helpfulCount
  var unhelpfulCount = item.unhelpfulCount
  var responder = item.nameOfResponder
  var targetTeamMember = item.targetTeamMember

  if(targetTeamMember) {
    var teamText = 'Target Team Member'
  } else {
    teamText = ''
  }

  return (
    <div>
      <p><b>Q: {question}</b></p>
      <p>{asker} - {dateAsked}</p>
      <p><b>A:</b>{answer}</p>
      <p>{responder} - {dateAnswered} <a>Helpful({helpfulCount})</a> <a>Unhelpful({unhelpfulCount})</a> <a>Report</a></p>
      {teamText}
    </div>
  )
}

export default QuestionWithAnswer;
