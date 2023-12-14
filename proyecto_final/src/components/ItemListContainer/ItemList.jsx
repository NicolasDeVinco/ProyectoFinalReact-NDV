import { useEffect, useState } from "react"
import './ItemList.css'
import { Filter } from "./Extras/Filter"
import { Titles } from "./Extras/Titles"
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const ItemList = () => {

    const [user, setUsers] = useState([])
    const [filter, setFilter] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dbFirestore = getFirestore()
                const queryCollection = collection(dbFirestore, 'usuarios')

                const response = await getDocs(queryCollection)
                const userData = response.docs.map(user => ({ id: user.id, ...user.data() }))

                setUsers(userData)
            } catch (error) {
                console.error('Error al obtener usuarios:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    const handleChangeFilter = (filter) => {
        setFilter(filter)
    }

    const usersFiltrados = user.filter((user) => {
        if (filter === "hombre" || filter === "mujer") {
            return user.genero === filter
        } else {
            return filter === "" || user.posicion === filter
        }
    })

    return (
        <div>
            <Titles title="ELEGÍ TU EQUIPO" />
            <Filter onChangeFilter={handleChangeFilter} />
            <div className="users__container">
                {loading ? (
                    <h3>Cargando...</h3>
                ) : (
                    usersFiltrados.map((user) => (
                        <div key={user.id} className="user__card--container">
                            <h1>{user.nombre}</h1>
                            <img src={user.imagen} className="user__card--img" alt={user.nombre} />
                            <p>Precio: ${user.precio}</p>
                            <Link to={`/categoria/usuarios/${user.genero}/${user.id}`} className="user__card--button">Ver más</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}