import ItemDetails from './components/ItemDetails/ItemDetails.jsx';
import Shipping from './components/Shipping/Shipping.jsx';
import Sizing from './components/Sizing/Sizing.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      sizing: [],
      questions: []
    };

  }
  componentDidMount() {
    var id = 12;
    Promise.all([fetch("http://127.0.0.1:3001/api/items/" + id),
      fetch("http://127.0.0.1:3001/api/questions/" + id),
      fetch("http://127.0.0.1:3001/api/sizing/" + id)
    ])
    .then(([res1, res2, res3]) => {
      return Promise.all([res1.json(), res2.json(), res3.json()])
    })
    .then(([res1, res2, res3]) => {
      this.setState({
        results: res1,
        questions: res2,
        sizing: res3
      })
    })
  }

  render() {

    if(this.state.results.length) {
      var currentEle = <Sizing details={this.state.sizing}/>
    }
    return(
      <div>
        <div>{currentEle}</div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("service"))
