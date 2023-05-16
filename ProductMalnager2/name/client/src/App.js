import logo from './logo.svg';
import './App.css';
import NewProductPage from './views/NewProductPage';
import ProductPage from './views/ProductPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Working</h1>
      <Routes>
        <Route path = '/product/new' element={<NewProductPage/>} />
        <Route path = '/product/:id' element={<ProductPage/>} />


      </Routes>
    </div>
  );
}

export default App;
