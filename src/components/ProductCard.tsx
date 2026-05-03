import "../index.css";
import img from "../assets/react.svg";

type ProductCardProps = {
  product: {
    name: string;
    description: string;
    price: number;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={img} alt="Product Image" loading="lazy" />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
