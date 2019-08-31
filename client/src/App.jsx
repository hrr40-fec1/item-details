import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Shipping from './components/Shipping/Shipping';
import Sizing from './components/Sizing/Sizing';
import Questions from './components/Questions/Questions';
import GiftNow from './components/GiftNow/GiftNow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'ItemDetails',
      results: [],
      sizing: [],
      questions: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = 50;
    Promise.all([fetch(`http://127.0.0.1:3001/api/items/${id}`),
      fetch(`http://127.0.0.1:3001/api/questions/${id}`),
      fetch(`http://127.0.0.1:3001/api/sizing/${id}`),
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([res1, res2, res3]) => {
        this.setState({
          results: res1,
          questions: res2,
          sizing: res3,
        });
      });
  }

  handleClick(e) {
    this.setState({
      current: e,
    });
  }

  render() {
    if (this.state.current === 'ItemDetails' && this.state.results.length) {
      var currentEle = <ItemDetails details={this.state.results} />;
    } else if (this.state.current === 'Shipping') {
      var currentEle = <Shipping details={this.state.results} />;
    } else if (this.state.current === 'Sizing') {
      var currentEle = <Sizing details={this.state.sizing} />;
    } else if (this.state.current === 'Questions') {
      var currentEle = <Questions details={this.state.questions} />;
    } else if (this.state.current === 'GiftNow') {
      var currentEle = <GiftNow />;
    }

    return (
      <div>
        <nav>
          <a onClick={() => this.handleClick('ItemDetails')}>Details  </a>
          <a onClick={() => this.handleClick('Sizing')}>Size charts  </a>
          <a onClick={() => this.handleClick('Shipping')}>Shipping & Returns </a>
          <a onClick={() => this.handleClick('Questions')}>Q&A  </a>
          <a onClick={() => this.handleClick('GiftNow')}>What's GiftNow?</a>

        </nav>
        <div>{currentEle}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('service'));
