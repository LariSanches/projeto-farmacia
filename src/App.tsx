import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import ListaCategoria from './components/categorias/listaCategorias/ListaCategoria'
import FormularioCategoria from './components/categorias/formularioCategoria/formularioCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCAtegoria'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;