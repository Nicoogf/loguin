import { BrowserRouter , Routes, Route } from "react-router-dom" ;

import RegisterPage from "./pages/RegisterPage" ;
import LoguinPage from "./pages/LoguinPage" ;

function App() {
  return (
    
      <BrowserRouter>
      <Routes >   
       
      <Route  path="/" element={<h1>HomePage</h1>} />   
      <Route  path="/loguin" element={<LoguinPage />} />   
      <Route  path="/register" element={<RegisterPage />} />   
      <Route  path="/task" element={<h1>TaskList</h1>} />   
      <Route  path="/add-task" element={<h1>AgregarTarea</h1>} />   
      <Route  path="/task/:id" element={<h1>Actualizar Tarea</h1>} />   
      <Route  path="/profile" element={<h1>Perfil</h1>} />   

      </Routes>
       
      </BrowserRouter>
     
    
  )
}

export default App;
