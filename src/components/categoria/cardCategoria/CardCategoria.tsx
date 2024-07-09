import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardPostagemProps {
    categoria: Categoria
}

function CardPostagem({ categoria }: CardPostagemProps) {
    return (
        <div className='border flex flex-col rounded-2xl text-gray-800 overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-purple-800 text-white font-bold text-2xl'>{categoria.nome}</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className='w-full bg-green-200 hover:bg-green-400 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className=' bg--400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem