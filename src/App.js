import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Products from './pages/all-products';


const App = () => {
  return (
    <>
    <div>
        <Routes>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/products" element={() => <Products />} />         
        </Routes>
    </div>
    </>
  )
}

export default App;
