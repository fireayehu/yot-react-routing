import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Link
          to={`/category/${category}`}
          className={styles.card}
          key={category}
        >
          <h1>{category}</h1>
        </Link>
      ))}
    </div>
  );
};
