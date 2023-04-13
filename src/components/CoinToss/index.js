// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickToChangeToss = () => {
    const {headsCount, tailsCount} = this.state

    const toss = Math.floor(Math.random() * 2)

    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImg = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      tossResultImg: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  getTotalToss = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return totalCount
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalToss()

    return (
      <div className="container">
        <div className="app-container">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="toss-description">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="toss-img" />
          <button
            type="button"
            onClick={this.onClickToChangeToss}
            className="button"
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="total">Total: {totalCount}</p>
            <p className="head">Heads: {headsCount}</p>
            <p className="tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
