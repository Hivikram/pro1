import './index.css'
import {Component} from 'react'
class LettersCalculator extends Component {
  state = {v: '0'}
  fun = event => {
    const val = event.target.value.length
    this.setState(() => ({v: val}))
  }
  render() {
    const {v} = this.state
    return (
      <div className="card">
        <div className="div1">
          <h1 className="div1_h1">Calculate the Letters you enter</h1>
          <lable htmlFor="input_id" className="div1_p1">
            Enter the phrase
          </lable>
          <br />
          <input
            id="input_id"
            onChange={this.fun}
            className="input_feald"
            type="search"
            placeholder="Enter the pharse"
          />
          <p className="innercard_p">No.of letters: {v} </p>
        </div>
        <div className="div2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="div2_img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
