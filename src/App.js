import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import MoviePage from "./container/MoviePage/MoviePage";
import ProductsPage from "./container/ProductsPage/ProductsPage";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <div>
        <p>You are not logged in.</p>
        <button onClick={() => setIsLoaded(true)}>Login</button>
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route index element={<p>Homee</p>} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
