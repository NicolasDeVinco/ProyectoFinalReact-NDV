import './MessageBuy.css'

const MessageBuy = ({ onAgree, orderId }) => {
  return (
    <div className="mensaje-compra">
      <p>Gracias por tu compra</p>
      <p>Tu numero de orden es: {orderId}</p>
      <button className="boton__compra--mensaje" onClick={onAgree}>Aceptar</button>
    </div>
  )
}

export default MessageBuy
