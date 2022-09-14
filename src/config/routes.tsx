import Mensagem from "pages/Mensagem";
import Perfil from "pages/Perfil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Cadastro from "../pages/cadastro";
import Home from "../pages/Home";
import Index from "../pages/index";
import Login from "../pages/Login";

export default function AppRouter(){
    return(
      
        <Router>
          <Header/>
          <main className="container">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/mensagem' element={<Mensagem/>} />
          <Route path='/perfil' element={<Perfil/>} />
        </Routes>
          </main>
        <Footer />
      </Router>
      
    );
}