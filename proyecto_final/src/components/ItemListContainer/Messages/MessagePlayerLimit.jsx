import './Messages.css'

const MessagePlayerLimit = ({ onAgree }) => {
  return (
    <div className="message__container">
      <p>Solo puedes agregar 11 jugadores</p>
      <button className="boton__agree" onClick={onAgree}>Aceptar</button>
    </div>
  )
}

export default MessagePlayerLimit
