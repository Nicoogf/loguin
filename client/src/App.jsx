import { BrowserRouter , Routes, Route } from "react-router-dom" ;

import RegisterPage from "./pages/RegisterPage" ;
import LoguinPage from "./pages/LoguinPage" ;
import { AuthProvider } from "./context/authContext" ;
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoutes from "./ProtectedRoutes";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider >
      <TaskProvider >
      
          <BrowserRouter>
         
          <Navbar />
          <Routes>           
            <Route  path="/" element={<HomePage />} />   
            <Route  path="/loguin" element={<LoguinPage />} />   
            <Route  path="/register" element={<RegisterPage />} />          

            <Route element={ <ProtectedRoutes />}>   
              <Route  path="/tasks" element={ <TasksPage/>} />   
              <Route  path="/add-task" element={<TaskFormPage />} />   
              <Route  path="/task/:id" element={<TaskFormPage />} />   
              <Route  path="/profile" element={<ProfilePage />} />   
            </Route>
          </Routes>
          
          
          
          </BrowserRouter>  
       
      </TaskProvider>   
    </AuthProvider>
  )
}

export default App;
