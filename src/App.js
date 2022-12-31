
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from './pages/Home/HomePage';
import { CartPage } from './pages/Cart/CartPage';
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { saveProduct } from "./services/productService";
//import {CartProvider} from './componentes/CartContext/CartContext';


function App() {
  saveProduct ();
  return (
    
    <BrowserRouter>
      <div className="App">
        
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/carrinho-de-compras" element={<CartPage />} />
          </Routes>
      
      </div>
    </BrowserRouter>
    

  );
}

export default App;
