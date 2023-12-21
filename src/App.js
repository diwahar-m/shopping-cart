import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header.js' ;
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';


function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
