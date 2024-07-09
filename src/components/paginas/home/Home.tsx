import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <>
         <div className="bg-black flex flex-col justify-center items-center">
                <div className='container grid grid-cols-1 text-purple-200 p-16'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Esse é o Stitch</h2>
                        <p className='text-xl'>meio aleatório, mas é isso ai</p>
                    </div>

                    <div className="flex justify-center">
                        <img src='https://pngimg.com/uploads/stitch/small/stitch_PNG73.png' alt="" className='object-fill' />

                    </div>
                </div>
                <div className='container grid grid-cols-1  text-purple-200 p-16'>
                <div className="flex justify-center">
                        <img src='https://pngimg.com/uploads/white_dove/small/white_dove_PNG45.png' alt="" className='object-contain' />

                    </div>

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>E isto é uma pomba</h2>
                        <p className='text-xl'>É isso ai</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home