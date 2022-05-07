import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' //156 BrowserRouter(contenedor principal); Route(c/u de las pag estaran aqui)
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente' //158
import EditarCliente from './paginas/EditarCliente' //158
import VerCliente from './paginas/VerCliente' //175

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio />}/>
          <Route path='nuevo' element={<NuevoCliente/>} />
          <Route path='editar/:id' element={<EditarCliente/>} />
          <Route path=':id' element={<VerCliente/>} /*175*//> 
        </Route>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
