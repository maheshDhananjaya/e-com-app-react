import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const products = new Array(25).fill(null);
  return (
    <>
      <h3>Product List</h3>
      <div className="product-list">
        {products.map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
