import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminLogin from "../../AdminLogin/AdminLogin";
import Banners from "../Banners/Banners";
import AddAndEdit from "../Category/AddAndEdit";
import Category from "../Category/Category";
import Dashboard from "../Dashboard/Dashboard";
import Order from "../Order/Order";
import Product from "../Product/Product";
import ProductAdd from "../Product/ProductAdd";
import Report from "../Report/Report";

const RouterConfig = () => {
  return (
    <>
        <Router>
            <Routes>
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
             <Route path="/addCategory" element={<AddAndEdit />} /> 
            <Route path="/editCategory/:id" element={<AddAndEdit />} />
            <Route path="/order" element={<Order />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productadd" element={<ProductAdd />} />
            <Route path="/productedit/:id" element={<ProductAdd />} />
            <Route path="/banner" element={<Banners />} />
            <Route path="/report" element={<Report />} />
            </Routes>
        </Router>
    </>
  );
}

export default RouterConfig;
