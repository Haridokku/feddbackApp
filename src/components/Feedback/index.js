import {Component} from 'react'

import Emoji from '../Emoji'

import './index.css'

class Feedback extends Component {
  thanking = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
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
    const {resources} = this.props
    const {emojis} = resources
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
}
export default Feedback
