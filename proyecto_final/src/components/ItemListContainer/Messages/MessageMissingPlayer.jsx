import './Messages.css'

const MessageMissingPlayer = ({ onAgree }) => {
  return (
    <div className="message__container">
      <p>Faltan jugadores en tu equipo. Debes tener 11 jugadores para completar la compra.</p>
      <button className="boton__agree" onClick={onAgree}>Aceptar</button>
    </div>
  )
}

export default MessageMissingPlayer
