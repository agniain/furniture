import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Products from './pages/all-products';
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
    <div>
        <Routes>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/products" element={() => <Products />} /> 
          <Route path="/about" element={() => <About />} /> 
          <Route path="/contact" element={() => <Contact />} /> 
        </Routes>
    </div>
    </>
  )
}

export default App;
