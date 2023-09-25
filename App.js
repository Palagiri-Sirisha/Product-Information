import './App.css';
import ImageCarousel from './ImageCarousel';
import Product from './Product';
import ProductMatrix from './ProductMatrix';

function App() {
  return (
    <div className="App">
       <h1 style={{textAlign:"center",color:"red",textDecoration:"underline"}}>Product Insurance</h1>
     <br/>
     <br/>
      <div style={{display:"flex"}}>
      <ProductMatrix />
      <Product />
      </div>
      <br/>
     <ImageCarousel />
 
    </div>
  );
}

export default App;
