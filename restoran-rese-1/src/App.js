
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarHead from "./layout/NavbarHead";
import Vacancy from "./pages/Vacancy";
import Report from "./pages/Report";
import MessageTest from "./function/MessageTest";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditVacancy from "./function/EditVacancy";
import ViewVacancy from "./function/ViewVacancy";
import ViewResume from "./function/ViewResume";
import SendMessage from "./function/SendMessage";
import Login from "./pages/Login";
import Interview from "./pages/Interview";
import EditInterview from "./function/EditInterview";
import Homepage from "./pages/Homepage";
import Testdata from "./pages/Testdata";
import EditTestdata from "./function/EditTestdata";
import Profile from "./pages/Profile";
import Position from "./pages/Position";
import EditPosition from "./function/EditPosition";
import AsassignEmployeeToPosition from "./function/assignEmployeeToPosition";
import Registretion from "./pages/Registretion";

function App() {
  return (
    <div className="App" >
       
       <Router>
        <NavbarHead/>
        <Routes>
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Registretion' element={<Registretion/>}/>
            <Route exact path='/Homepage' element={<Homepage/>}/>
            <Route exact path='/Vacancy' element={<Vacancy/>}/>
            <Route exact path='/Report' element={<Report/>}/>
            <Route exact path="/Vacancy/:id" element={<EditVacancy/>}/>
            <Route exact path="/VacancyDetail/:id" element={<ViewVacancy/>}/>
            <Route exact path="/ResumeDetail/:id" element={<ViewResume/>}/>
            <Route exact path="/MessageTest" element={<MessageTest/>}/>
            <Route exact path="/Interview" element={<Interview/>}/>
            <Route exact path="/SendMessage" element={<SendMessage/>}/>
            <Route exact path="/Interview/:id" element={<EditInterview/>}/>
            <Route exact path="/Testdata" element={<Testdata/>}/>
            <Route exact path="/Testdata/:id" element={<EditTestdata/>}/>
            <Route exact path="/Profile" element={<Profile/>}/>
            <Route exact path="/Position" element={<Position/>}/>
            <Route exact path="/Position/:id" element={<EditPosition/>}/>
            <Route exact path="/Asassign/:id" element={<AsassignEmployeeToPosition/>}/>


        </Routes>
        </Router> 
    </div>
      );
}



export default App;