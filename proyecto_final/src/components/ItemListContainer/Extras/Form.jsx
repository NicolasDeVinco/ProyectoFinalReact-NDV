import './Form.css'
import { useState } from 'react'
import MessageFormIncomplete from '../Messages/MessageFormIncomplete'

export const Form = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [mail, setMail] = useState("")
  const [showMessage, setshowMessage] = useState(false)


  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "nombre") {
      setNombre(value)
    } else if (name === "apellido") {
      setApellido(value)
    } else if (name === "mail") {
      setMail(value)
    }
  }

  const handleSubmit = () => {
    if (nombre && apellido && mail) {
      onFormSubmit({ nombre, apellido, mail })
    } else {
      setshowMessage(true)
    }
  }

  const handleAgreeMensaje = () => {
    setshowMessage(false)
  };

  return (
    <div className="formulario__container">
      <input
        className="input__form"
        type="text"
        placeholder="Nombre"
        name="nombre"
        value={nombre}
        onChange={handleInputChange}
      />
      <input
        className="input__form"
        type="text"
        placeholder="Apellido"
        name="apellido"
        value={apellido}
        onChange={handleInputChange}
      />
      <input
        className="input__form"
        type="email"
        placeholder="Mail"
        name="mail"
        value={mail}
        onChange={handleInputChange}
      />
      <button className="cart__button" onClick={handleSubmit}>
        Completar Compra
      </button>
      {showMessage && (
        <MessageFormIncomplete onAgree={handleAgreeMensaje} />
      )}
    </div>
  )
}
