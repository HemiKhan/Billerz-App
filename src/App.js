import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import ProductDetailsAffiliatePage from "./Pages/ProductDetails/productDetailsAffiliatePage";
import ProductDetailsDefaultPage from "./Pages/ProductDetails/productDetailsDefaultPage";
import ProductDetailsGalleryLeftPage from "./Pages/ProductDetails/productDetailsGalleryLeftPage";
import ProductDetailsGalleryRightPage from "./Pages/ProductDetails/productDetailsGalleryRightPage";
import ProductDetailsGroupPage from "./Pages/ProductDetails/productDetailsGroupPage";
import ProductDetailsSingleSlidePage from "./Pages/ProductDetails/productDetailsSingleSlidePage";
import ProductDetailsStickyLeftPage from "./Pages/ProductDetails/productDetailsStickyLeftPage";
import ProductDetailsStickyRightPage from "./Pages/ProductDetails/productDetailsStickyRightPage";
import ProductDetailsTabLeftPage from "./Pages/ProductDetails/productDetailsTabLeftPage";
import ProductDetailsTabRightPage from "./Pages/ProductDetails/productDetailsTabRightPage";
import ProductDetailsVariablePage from "./Pages/ProductDetails/productDetailsVariablePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details-Affiliate" element={<ProductDetailsAffiliatePage />} />
        <Route path="/product-details-default" element={<ProductDetailsDefaultPage />} />
        <Route path="/product-details-gallery-left" element={<ProductDetailsGalleryLeftPage />} />
        <Route path="/product-details-gallery-right" element={<ProductDetailsGalleryRightPage />} />
        <Route path="/product-details-group" element={<ProductDetailsGroupPage />} />
        <Route path="/product-details-single-slide" element={<ProductDetailsSingleSlidePage />} />
        <Route path="/product-details-sticky-left" element={<ProductDetailsStickyLeftPage />} />
        <Route path="/product-details-sticky-right" element={<ProductDetailsStickyRightPage />} />
        <Route path="/product-details-tab-left" element={<ProductDetailsTabLeftPage />} />
        <Route path="/product-details-tab-right" element={<ProductDetailsTabRightPage />} />
        <Route path="/product-details-variable" element={<ProductDetailsVariablePage />} />

      </Routes>     
  </Router>
  );
}

export default App;
