import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden pb-24'>

            <img 
                className='w-full h-72 object-cover border-b-8 border-white' 
                src="https://ik.imagekit.io/yijg14v4w/Blog_pessoal_React/top-view-notebookss.jpg"
                alt="Capa do Perfil"
            />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario.foto} 
                alt={`Foto de perfil de ${usuario.nome}`} 
            />

            <div 
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-[#900551] text-white text-2xl items-center justify-center rounded-b-2xl"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil