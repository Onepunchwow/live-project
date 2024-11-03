import { HashRouter,Routes,Route,Link } from "react-router-dom";
import Dasha from "./dashboard";
import Nprodu from "./newproduct";
import Lprodu from "./productlist";
import Morder from "./orderlist";
import Category from "./category";
//import all 4 pages and write routing in bottom
const Sellermodule=()=>{
    return(
        <HashRouter>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand">Shop Online</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item me-4">
                                    <Link to="/" className="nav-link"><i className="fa fa-gears"></i> Dashboard</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link to="/category" className="nav-link"><i className="fa fa-database"></i> Category</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link to="/newproduct" className="nav-link"><i className="fa fa-plus"></i> New Product</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link to="/productlist" className="nav-link"><i className="fa fa-bars"></i> Product List</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link to="/orderlist" className="nav-link"><i className="fa fa-headset"></i> Order List</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link className="nav-link text-warning">Hi, Seller one <i className="fa fa-power-off"></i> Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Dasha/>}/>
                    <Route exact path="/category" element={<Category/>}/>
                    <Route exact path="/newproduct" element={<Nprodu/>}/>
                    <Route exact path="/productlist" element={<Lprodu/>}/>
                    <Route exact path="/orderlist" element={<Morder/>}/>
                </Routes>
        </HashRouter>
    )
}

export default Sellermodule;