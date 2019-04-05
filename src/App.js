import React, { Component } from 'react';

class App extends Component {

  state = {
    min: 1,
    sec: 0,
    button: 'play'
  }

  setC = (e) => {
    this.setState({
      min: e.target.value,
      sec: 0,
      button: 'play'
    })
  }

  startC = () => {
    let curMin = this.state.min
    this.setState({
      min: curMin,
      sec: 0,
      button: 'stop'
    })
    this.interval = setInterval(() => {

      if(this.state.sec === 0 && this.state.min !== 0){
        let nextMin = this.state.min - 1
        let nextSec = 59
        this.setState({
          min: nextMin,
          sec: nextSec,
          button: 'stop'
        })
      } else if (this.state.sec === 0 && this.state.min === 0) {

        this.stopC();
        alert('HEY. TIMER ENDED');

      } else {
        let nextMin = this.state.min
        let nextSec = this.state.sec - 1
        this.setState({
          min: nextMin,
          sec: nextSec,
          button: 'stop'
        })
      }

    }, 1000);
  }

  stopC = () => {
    clearInterval(this.interval);
    this.setState({
      min: 1,
      sec: 0,
      button: 'play'
    })

  }



changeC = (e) => {
  let curMin = this.state.min
  e.target.value === '+' ? curMin < 99 ? this.setState({min: curMin + 1}) : this.setState({min: curMin}) : curMin > 1 ? this.setState({min: curMin - 1}) : this.setState({min: curMin})
}


  render() {
    return (
      <div className="App">
        <h1>Set timer and countdown</h1>
        <br />
        {
        // <input type={this.state.button === 'play' ? "number" : "hidden"} min='1' max='99' name="setMin" id="setMin" value={this.state.min} onChange={this.setC} />
        }
        <br />
        <h1>{this.state.min.toString().length === 1 ? '0' + this.state.min : this.state.min} : {this.state.sec.toString().length === 1 ? '0' + this.state.sec : this.state.sec}</h1>
        <input type={this.state.button === 'play' ? "button" : "hidden"} onClick={this.changeC} value='-' />
        <input type={this.state.button === 'play' ? "button" : "hidden"} onClick={this.changeC} value='+' />
        <br />
        <button onClick={this.state.button === 'play' ? this.startC : this.stopC}>{this.state.button}</button>
      </div>
    );
  }
}

export default App;
