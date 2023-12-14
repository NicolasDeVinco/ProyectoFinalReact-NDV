import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemList } from './components/ItemListContainer/ItemList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { InProgress } from './components/ItemListContainer/Extras/InProgress'
import { Navbar } from './components/Navbar/Navbar'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer'
import { useState } from 'react'
import { Counter } from './components/Navbar/Counter'
import { CartContainer } from './components/ItemListContainer/CartContainer'
import { CartContextProvider } from './components/ItemListContainer/CartContext'
import MessageRepeatUser from './components/ItemListContainer/Messages/MessageRepeatUser'
import MessagePlayerLimit from './components/ItemListContainer/Messages/MessagePlayerLimit'


function App ( ) {

  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [showMessageRepeatUser, setShowMessageRepeatUser] = useState(false)
  const [showMessagePlayerLimit, setshowMessagePlayerLimit] = useState(false)


  const addToCart = (item, quantity) => {
    const isUserInCart = cartItems.some(cartItem => cartItem.item.id === item.id)

    if (isUserInCart) {
      setShowMessageRepeatUser(true)
    } 
    else {
        if (cartItems.length < 11) {
          setCartItems([...cartItems, { item }])
          setCount(prevCount => prevCount + quantity)
        } 
        else {
          setshowMessagePlayerLimit(true)
        }
      }
    }

  const handleAgreeMessage = () => {
    setShowMessageRepeatUser(false)
    setshowMessagePlayerLimit(false)
  }

    return (
      <Router>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path="/categoria/usuarios" element={<ItemList/>} />
            <Route path="/categoria/usuarios/:genero" element={<ItemList />} />
            <Route path="/categoria/usuarios/:id" element={<ItemDetailContainer setCount={setCount} addToCart={addToCart}/>} />
            <Route path="/categoria/usuarios/:genero/:id" element={<ItemDetailContainer setCount={setCount} addToCart={addToCart}/>} />
            <Route path='/categoria/postulate' element={<InProgress /> }/>
            <Route path='/equipo' element={<CartContainer cartItems={cartItems} setCartItems={setCartItems} setCount={setCount}/> }/>
          </Routes>
          <Counter count={count} />
        </CartContextProvider>
        {showMessageRepeatUser && <MessageRepeatUser onAgree={handleAgreeMessage} />}
        {showMessagePlayerLimit && <MessagePlayerLimit onAgree={handleAgreeMessage} />}
      </Router>
    )
}

export default App
 