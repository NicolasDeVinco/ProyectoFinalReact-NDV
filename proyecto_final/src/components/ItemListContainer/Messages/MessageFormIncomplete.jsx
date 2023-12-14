import './Messages.css'

const MessageFormIncomplete = ({ onAgree }) => {
  return (
    <div className="message__container">
      <p>Completa todos los campos del formulario antes de comprar.</p>
      <button className="boton__agree" onClick={onAgree}>
        Aceptar
      </button>
    </div>
  )
}

export default MessageFormIncomplete
