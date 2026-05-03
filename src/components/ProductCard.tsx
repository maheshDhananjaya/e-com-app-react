import "../index.css";
import img from "../assets/react.svg";

type ProductCardProps = {
  product: {
    name: string;
    description: string;
    price: number;
  };
  onAddToCart: () => void;
};

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={img} alt="Product Image" loading="lazy" />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        className="product-card__add-btn"
        type="button"
        onClick={onAddToCart}
        aria-label={`Add ${product.name} to cart`}
      >
        ➕ Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
