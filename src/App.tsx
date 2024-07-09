import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Home from './components/paginas/home/Home'
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias'
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[90vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App