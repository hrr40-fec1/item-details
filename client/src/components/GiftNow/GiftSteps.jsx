function GiftSteps(props) {
  var imageUrl = props.step.url
  var step = props.step.step
  var description = props.step.description

  return(
    <div>
    <img src={imageUrl} />
      {step}
      {description}
    </div>
  )
}

export default GiftSteps;
