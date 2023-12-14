import React, { useState, useEffect } from 'react'
import './CartContainer.css'
import { Titles } from './Extras/Titles'
import { Form } from './Extras/Form'
import MessageBuy from './Messages/MessageBuy'
import MessageMissingPlayer from './Messages/MessageMissingPlayer'
import { v4 as uuidv4 } from 'uuid'

export const CartContainer = ({ cartItems, setCartItems, setCount}) => {
  const [finalPrice, setFinalPrice] = useState(0)
  const [showMessageBuy, setShowMessageBuy] = useState(false)
  const [showMessageMissingPlayer, setshowMessageMissingPlayer] = useState(false)
  const [newOrderId, setNewOrderId] = useState(null)

  useEffect(() => {
    let total = 0

    for (const cartItem of cartItems) {
      total += cartItem.item.precio
    }

    setFinalPrice(total)
  }, [cartItems])

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems]
    updatedCart.splice(index, 1)
    setCartItems(updatedCart)
    setCount((prevCount) => prevCount - 1)
  }

  const handleEmptyCart = () => {
    setCartItems([])
    setCount(0)
  }

  const handleFormSubmit = (formData) => {
    console.log('Datos del formulario:', formData)
    if (cartItems.length === 11) {
      const orderId = uuidv4()
      setNewOrderId(orderId)
      setCartItems([])
      setCount(0)
      setShowMessageBuy(true)
      setshowMessageMissingPlayer(false)
    } 
    else {
      setShowMessageBuy(false)
      setshowMessageMissingPlayer(true)
    }
  }

  const handleAgreeMessageBuy = () => {
    setShowMessageBuy(false)
    window.location.href = '/'
  }

  return (
    <div>
      <Titles title="MI EQUIPO" />
      <div className="cart__container--info">
        <div>
          <ul>
            {cartItems.map((cartItem, index) => (
              <li key={index}>
                {cartItem.item.nombre} - Posicion: {cartItem.item.posicion} - Precio: {cartItem.item.precio}
                <img
                  className="cross__img"
                  src="../src/images/cerca.png"
                  alt="imagen equis"
                  onClick={() => handleRemoveItem(index)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="cart__info--button">
          <button className="cart__button" onClick={handleEmptyCart}>
            Vaciar equipo
          </button>
        </div>
        <div className="cart__info--price">Precio final: ${finalPrice}</div>
        <div className="cart__info--form">
          <Form onFormSubmit={handleFormSubmit} />
        </div>
        {showMessageBuy && (
          <MessageBuy onAgree={handleAgreeMessageBuy} orderId={newOrderId} />
        )}
        {showMessageMissingPlayer && (
          <MessageMissingPlayer onAgree={() => setshowMessageMissingPlayer(false)} />
        )}
      </div>
    </div>
  )
}
