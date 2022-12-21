import './App.css';
import Navbar from './components/navbar/Navbar'
import ContainerCardItems from './components/componentsItem/ContainerCardItems';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DetailsItem from './components/componentsItem/DetailItems';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ContainerCardItems />}/>
        <Route path='/item/:idItem' element={<DetailsItem />}/>
        <Route path='/category/:idCategory' element={<ContainerCardItems />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
