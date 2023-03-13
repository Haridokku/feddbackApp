import './index.css'

const Emoji = props => {
  const {emojiDetails, thanking} = props
  const {name, imageUrl} = emojiDetails
  const thank = () => {
    thanking()
  }
  return (
    <li className="emoji">
      <div className="emoji1">
        <img src={imageUrl} alt={name} className="img" onClick={thank} />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}
export default Emoji
