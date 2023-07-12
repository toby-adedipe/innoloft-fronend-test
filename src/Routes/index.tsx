import {Route, Routes} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Product from "../Pages/Product";
import ProductEdit from "../Pages/Product/Edit";

const CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/edit" element={<ProductEdit />} />
      </Routes>
    </>
  )
}

export default CustomRoutes;