const Notification = ({text, color, active}) => {
  return (
    <div className={`notification-holder ${color} ${active? 'active': ''}`}>
        {text}
    </div>
  )
}

export default Notification