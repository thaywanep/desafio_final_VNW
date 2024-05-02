import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/inicio"
import Sobre from "./pages/sobre/sobre"
import Projetos from "./pages/projetos/projetos"
import { GlobalStyle } from "./components/styled";


export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}