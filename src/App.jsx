import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { ProductsPage } from "./pages/products/products";
import { ProductDetailPage } from "./pages/product-detail/product-detail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
