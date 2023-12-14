import { Counter } from './Counter'
import './Navbar.css'
import { NavLink } from "react-router-dom"

export const Navbar = () => { 

    return (
        <div className="navbar__container">
            <NavLink className="logo__container" to='/'>EQUIPAZO!</NavLink>
            <div className="categorias__container">
                <NavLink className="categoria__item" to='/'>INICIO</NavLink>
                <NavLink className="categoria__item" to='/categoria/usuarios'>USUARIOS</NavLink>
                <NavLink className="categoria__item" to='/categoria/postulate'>POSTULATE</NavLink>
            </div>
            <div className="cartwidget__container">
                <NavLink className="cart__widget--item" to='/equipo'><img src="../src/images/capitan-del-equipo.png" className="cartwidget__img" alt="imagen cart widget equipo" />  </NavLink>   
            </div>
             <Counter />
        </div>
    )
}