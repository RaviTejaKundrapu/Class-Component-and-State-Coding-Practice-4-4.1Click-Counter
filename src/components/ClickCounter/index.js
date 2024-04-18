import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(previousCount => ({count: previousCount.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="count-description">
          The Button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <div className="button-container">
          <p className="button-description">
            Click the button to increase the count!
          </p>
          <button className="button" type="button" onClick={this.onIncrease}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
