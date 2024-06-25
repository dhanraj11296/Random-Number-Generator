/* Write your CSS here */
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }
  render() {
    const {randomNumber} = this.state

    return (
      <div className="appContainer">
        <div className="randomNumberGenerateContainer">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generateButton"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="randomNumberPara">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
