import { ItemDetail } from "./ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { Titles } from "./Extras/Titles"
import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore } from 'firebase/firestore'


export const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams()
  const [usuario, setUsuario] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const dbFirestore = getFirestore()
        const usuarioDoc = await getDoc(doc(dbFirestore, 'usuarios', id))

        if (usuarioDoc) {
          setUsuario({ id: usuarioDoc.id, ...usuarioDoc.data() })
        } else {
          console.log('No se encontró el usuario')
        }
      } catch (error) {
        console.error('Error al obtener usuario:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsuario()
  }, [id])

  return (
    <>
        <Titles title="DETALLES"/>
        { loading ? <h3 className="loading__h3">Cargando...</h3> 
        :  <ItemDetail selectedUser={usuario} onAddToCart={addToCart}/>}
    </>
    )
}
