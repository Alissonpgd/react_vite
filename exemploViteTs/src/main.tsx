import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BuscarEmail from './components/BuscarEmail/BuscarEmail.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CriarDev from './components/CriarDev/CriarDev.tsx'
import PrimeiroComponenteTaiwind from './components/PrimeiroComponente/PrimeiroComponenteTaiwind.tsx'
import CentralDiv from './components/CentralDiv/CentralDiv.tsx'
import Visualizar from './components/VisualizarDev/Visualizar.tsx'
import BarraNavegacao from './components/BarraNavegação/barraNavegacao.tsx'
import ListarTodos from  './components/ListarTodos/ListarTodos.tsx';
import Editar from  './components/EditarDev/EditarDev.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename='/dev'>
      <BarraNavegacao arrayItens={[
        { nome: 'Listar', url: '/listar' },
        { nome: 'Cadastro', url: '/cadastro' },
        { nome: 'Buscar', url: '/busca/email' },
        { nome: 'Base', url: '/' },
      ]} />
      <CentralDiv>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/listar" element={<ListarTodos />} />
            <Route path="/cadastro" element={<CriarDev />} />
            <Route path="/busca/email" element={<BuscarEmail />} />
            <Route path="/visualizacao" element={<Visualizar />} />
            <Route path="/editar/:id" element={<Editar />} />
            <Route path="/primeiro-componente" element={<PrimeiroComponenteTaiwind />} />
            <Route path="*" element={<h1>Pagina não encontrada </h1>} />
        </Routes>
      </CentralDiv>
    </Router>

  </StrictMode>,
)
