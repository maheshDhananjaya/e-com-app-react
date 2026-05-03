import "../index.css";
import img from "../assets/react.svg";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={img} alt="Product Image" loading="lazy" />
      <h4>Product Name</h4>
      <p>Product Description</p>
      <p>Price: $100</p>
    </div>
  );
};

export default ProductCard;
