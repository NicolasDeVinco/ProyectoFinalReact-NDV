import { Link } from "react-router-dom"
import './InputCount.css'

export const InputCount= ()=> {

    return (
        <>
        <div className="input__count--container">
            <Link to='/equipo' >
                <button 
                    className="ir__carrito" 
                >Ir a Mi Equipo</button>
            </Link>
            <Link to='/categoria/usuarios' >
                <button 
                    className="seguir__comprando" 
                >Seguir Agregando</button>
            </Link>
        </div>
        </>
    )
}