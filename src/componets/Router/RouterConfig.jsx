import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminLogin from "../../AdminLogin/AdminLogin";
import Banners from "../Banners/Banners";
import Category from "../Category/Category";
import Dashboard from "../Dashboard/Dashboard";
import Order from "../Order/Order";
import Product from "../Product/Product";
import Report from "../Report/Report";

const RouterConfig = () => {
  return (
    <>
        <Router>
            <Routes>
            <Route path="login" element={<AdminLogin />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="category" element={<Category />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Product />} />
            <Route path="banner" element={<Banners />} />
            <Route path="report" element={<Report />} />
            </Routes>
        </Router>
    </>
  );
}

export default RouterConfig;
