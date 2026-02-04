import React, { Suspense, useState } from "react";
import "./App.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
const Products = React.lazy(() => import("./Pages/Products/Index"));
const ProductDetails = React.lazy(() => import("./Pages/ProductDetails/Index"));
const ViewedItems = React.lazy(() => import("./Pages/ViewedProducts/Index"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="text-center mt-10">
            <LoadingOutlined />
          </div>
        }
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Products />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path="/viewedItems" element={<ViewedItems />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
