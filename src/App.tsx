import "./App.css";
import { useMemo, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = useMemo<Product[]>(
    () =>
      new Array(25).fill(null).map((_, index) => ({
        id: index,
        name: `Product ${index + 1}`,
        description: `Description for product ${index + 1}`,
        price: 100 + index * 5,
      })),
    [],
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Header />
      <main className="app-main">
        <SearchBar onSearch={setSearchQuery} />
        <h3>Product List</h3>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
