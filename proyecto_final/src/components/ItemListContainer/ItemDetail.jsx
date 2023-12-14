import { InputCount } from './Extras/InputCount'
import './ItemDetail.css'
import { useState } from 'react'
import { useCartContext } from './CartContext'


export const ItemDetail = ({ selectedUser, onAddToCart, cartItem  }) => {
  
  const [count, setCount] = useState(0)
  const [inputType, setInputType ] = useState(true)

  const { addUsuario } = useCartContext()

  const onAdd = (cantidad) => {
    addUsuario( { ...cartItem, cantidad } )
    setCount(prev => prev + 1)
    onAddToCart(selectedUser, count + 1)
    setInputType(false)
}


  return (
    <div className='detail__container--general'>
      <div className="detail__container">
        <div className='detail__data--container'>
          <div className="detail__data">
            <p className="detail__item">Nombre:</p>
            <p className="detail__item--answer">{selectedUser.nombre}</p>
          </div>
          <div className="detail__data">
            <p className="detail__item">Posición:</p>
            <p className="detail__item--answer">{selectedUser.posicion}</p>
          </div>
          <div className="detail__data">
            <p className="detail__item">Precio:</p>
            <p className="detail__item--answer"> {selectedUser.precio}</p>
          </div>
          <div className="detail__data">
            <p className="detail__item">Pie:</p>
            <p className="detail__item--answer">{selectedUser.pie}</p>
          </div>
        </div>
        <div className='detail__img--container'>
          <img src={`../../${selectedUser.imagen}`} alt={selectedUser.nombre} className="detail__img" />
        </div>
      </div>
      {inputType ? <button className='detail__button' onClick={onAdd} >Agregar a mi equipo</button> 
      : <InputCount />}
      
    </div>
  )
}
