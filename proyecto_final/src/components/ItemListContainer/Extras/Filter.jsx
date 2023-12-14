import './Filter.css'
import { NavLink } from 'react-router-dom'

export const Filter = ({onChangeFilter}) => {

    const handleClick = (filter) => {
      onChangeFilter(filter)
      }

  return (
    <div className="filtros__container">
        <NavLink to="/categoria/usuarios/hombre" className="filtros__item" onClick={() => handleClick("hombre")}>Hombre</NavLink>
        <NavLink to="/categoria/usuarios/mujer" className="filtros__item" onClick={() => handleClick("mujer")}>Mujer</NavLink>
        <select className="filtros__select" name="posicion" id="posicion" onChange={(e) => onChangeFilter(e.target.value)}>
            <option value="arquero">arquero</option>
            <option value="defensor">defensor</option>
            <option value="volante">volante</option>
            <option value="delantero">delantero</option>
        </select>
    </div>
  )
}
