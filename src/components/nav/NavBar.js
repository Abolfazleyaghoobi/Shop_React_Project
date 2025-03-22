import { Nav } from "react-bootstrap";
import logo from "../../assets/img/logosite.png"
import "./NavBar.css"
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Nav className=" pt-2">
      <div className="container">
        <div className="row ">
          {/* <!--! logo site --> */}
          <div className="col col-lg-2">
            <div className="loge">
              <img
                style={{height:"48px"}}
                className="img-fluid"
                src={logo}
                alt=""
              />
            </div>
          </div>
          {/* <!--! this's menu site --> */}
          <div className="col ">
            <ul className="d-flex  navList justify-content-center">
              <li className=" p-1">
                <a href="" className="">
                  Home
                </a>
              </li>
              {/* <!--  style inline icon and Shop subMenu --> */}

              <li className="  shopClass  p-1 position-relative">
                <span className="font-waight">Shop</span>
                <span style={{marginLeft:" 2.2px"}}>
                  <i className="bi bi-chevron-compact-down"></i>
                </span>
                <div className="subMenu position-absolute  p-3">
                  {/* <!-- this part use NavList classNameName --> */}
                  <ul className="navList d-flex ">
                    <li>
                      <div className="linkListOne">
                        <b>Men</b>
                        <div className="d-flex  LinkHover  flex-column">
                          <a href="">T-Shirts</a>
                          <a href="">Cusual Shirts</a>
                          <a href="">Formal Shirts</a>
                          <a href="">jackets</a>
                          <a href="">blazers & coats</a>
                        </div>
                      </div>
                      <div className="linkListTow mt-3">
                        <b>Indian & Fostive Waer</b>
                        <div className="d-flex LinkHover flex-column">
                          <a href="">Kurtas & Kurta Sets</a>
                          <a href="">Sherwanis</a>
                        </div>
                      </div>
                    </li>

                    {/* <!-- column tow submenu --> */}
                    <li className="ms-4">
                      <div className="linkListOne  ">
                        <b>Wemen</b>
                        <div className="d-flex LinkHover  flex-column">
                          <a href="">Kurtas & Suits </a>
                          <a href="">Sarees </a>
                          <a href="">Ethnic Wear </a>
                          <a href="">Lehenga Cholis </a>
                          <a href="">Jackets </a>
                        </div>
                      </div>
                      <div className="ps-2 linkListTow mt-3">
                        <b>Western Wear </b>
                        <div className="d-flex LinkHover flex-column">
                          <a href="">Dresses </a>
                          <a href="">Jumpsuits </a>
                        </div>
                      </div>
                    </li>

                    {/* <!-- column Three submenu --> */}
                    <li className="ms-5">
                      <div className="linkListOne">
                        <b>Footwear </b>
                        <div className="d-flex LinkHover flex-column">
                          <a href="">Flats </a>
                          <a href="">Casual Shoes </a>
                          <a href="">Heels </a>
                          <a href="">Boots </a>
                          <a href="">Sports Shoes & Floaters </a>
                        </div>
                      </div>
                      <div className="ps-2 linkListTow mt-3">
                        <b>Product Features </b>
                        <div className="d-flex LinkHover flex-column">
                          <a href="">360 Product Viewer </a>
                          <a href="">Product with Video </a>
                        </div>
                      </div>
                    </li>
                    {/* <!-- column four submenu --> */}
                    <li className="ms-5">
                      <div className="linkListOne">
                        <b>Kids </b>
                        <div className="d-flex LinkHover flex-column">
                          <a href="">T-Shirts </a>
                          <a href="">Shirts </a>
                          <a href="">Jeans </a>
                          <a href="">Trousers </a>
                          <a href="">Party Wear </a>
                        </div>
                      </div>
                      <div className="ps-2 linkListTow mt-3">
                        <b>Innerwear & Thermal </b>
                        <div className="d-flex LinkHover flex-column">
                          <a href="">Track Pants </a>
                          <a href="">Value Pack </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="  p-1">
                <a href="" className="">
                  Our Story
                </a>
              </li>
              <li className=" p-1">
                <a href="" className="">
                  Blog
                </a>
              </li>
              <li className=" p-1 pe-4">
                <a href="" className="">
                  Cantact Us
                </a>
              </li>
            </ul>
          </div>
          {/* <!--! this's icons and button Login --> */}
          <div className="col col-lg-2">
            <div className="icnLGIN d-flex align-items-center">
              <Link to="/login" className="btn btn-dark">Login</Link>
              <span>
                <i className="bi bi-bag fs-5 px-2 me-4"></i>
              </span>
              <span>
                <i className="bi bi-heart fs-5 px-2"></i>
              </span>
              <span>
                <i className="bi bi-search fs-5 px-2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
