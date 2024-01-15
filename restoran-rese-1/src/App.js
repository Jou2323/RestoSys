
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarHead from "./layout/NavbarHead";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Registretion from "./pages/Registretion";
import OrderModal from "./function/OrderModal";
import ParentComponent from "./function/ParentComponent";
import TableReservationModal from "./function/TableReservationModal";
import Historypage from "./pages/Historypage";
import OrderHistory from "./function/OrderHistory";
import TableHistory from "./function/TableHistory";
import KitchenPage from "./pages/KitchenPage";
import OrderList from "./function/OrderList";
import RecipeList from "./function/RecipeList";
function App() {
  return (
    <div className="App" >
       <Router>
        <NavbarHead/>
        <Routes>
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Registretion' element={<Registretion/>}/>
            <Route exact path='/Homepage' element={<Homepage/>}/>
            <Route exact path='/Historypage' element={<Historypage/>}/>
            <Route exact path='/OrderHistory' element={<OrderHistory/>}/>
            <Route exact path='/TableHistory' element={<TableHistory/>}/>
            <Route exact path="/Profile" element={<Profile/>}/>
            <Route exact path="/OrderModal" element={<OrderModal/>}/>
            <Route exact path="/ParentComponent" element={<ParentComponent/>}/>
            <Route exact path="/KitchenPage" element={<KitchenPage/>}/>
            <Route exact path="/OrderList" element={<OrderList/>}/>
            <Route exact path="/RecipeList" element={<RecipeList/>}/>
        </Routes>
        </Router> 
    </div>
      );
}

export default App;