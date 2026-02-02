import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Hopping SA!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenidos a Hopping SA!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/ruta-invalida" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/ruta-invalida" replace />} />
      </Routes>
    </>
  )
}

export default App
