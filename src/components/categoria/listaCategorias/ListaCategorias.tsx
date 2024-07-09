import React, { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/Service';
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('não funfou')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
        <h1 className='w-full text-4xl text-center p-8 bg-purple-200'>Categorias</h1>
        <div className='container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
        </div>
        </>
    )
}

export default ListaCategorias