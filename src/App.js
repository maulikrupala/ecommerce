import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import LoginForm from './Components/LoginForm';
import { Routes, Route, Link } from "react-router-dom";
import CartComponent from './Components/CartComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
    </div>
  );
}

export default App;
