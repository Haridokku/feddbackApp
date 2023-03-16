import {Component} from 'react'

import Emoji from '../Emoji'

import './index.css'

class Feedback extends Component {
  state = {isClick: false}

  thanking = () => {
    this.setState({isClick: true})
  }

  renderAuthButton = () => {
    const {isClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (isClick === false) {
      return (
        <div className="app-container">
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(each => (
                <Emoji
                  thanking={this.thanking}
                  key={each.id}
                  emojiDetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="describe">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    return <div className="container">{this.renderAuthButton()}</div>
  }
}
export default Feedback
