import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import ProblemPage from "./pages/ProblemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/problems" element={<ProblemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/**import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL
      
      const res = await axios.get(`${REACT_APP_BASE_URL}/products/view`);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-container">

      <div className="product-card">

        <h1>📦 Products Available in the Database</h1>

        <p className="count">
          Total Products : <span>{products.length}</span>
        </p>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">
                  No Products Available
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>₹ {product.price}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductList; */