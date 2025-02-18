import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#900551] text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-[#fff5fb] h-full text-[#900551]'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-[#fc2199] hover:bg-[#900551] 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='text-slate-100 bg-[#ff555d] hover:bg-[#f31d2f] w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas