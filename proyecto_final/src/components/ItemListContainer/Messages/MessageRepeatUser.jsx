import './Messages.css'

const MessageRepeatUser = ({ onAgree }) => {
  return (
    <div className="message__container">
      <p>Este usuario ya está en tu equipo</p>
      <button className="boton__agree" onClick={onAgree}>Aceptar</button>
    </div>
  )
}

export default MessageRepeatUser
