import ItemDetails from './components/ItemDetails/ItemDetails.jsx';
import SellingPoints from './components/ItemDetails/SellingPoints.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {results: []};

  }
  //component did mount
  componentDidMount() {
    fetch("http://127.0.0.1:3001/api/items/1")
      .then(res => res.json())
      .then(
        (result) => {
        this.setState({
          results: result
        })
      })

  }

  render() {

    if(this.state.results.length) {
      var currentEle = <SellingPoints details={this.state.results}/>
    }
    return(
      <div>
        <div>{currentEle}</div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("service"))
