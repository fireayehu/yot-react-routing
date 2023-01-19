import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./products.module.css";
export const ProductsPage = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt="" />
          <div className={styles.content}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h1>{product.price} ETB</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
