import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {AuthRoute} from "./AuthRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="products/:category" element={<ProductList/>}></Route>
                    <Route path="product/:id" element={<Product/>}></Route>
                    <Route path="cart" element={<Cart/>}></Route>
                    <Route element={<AuthRoute/>}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;