import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a href="91+ 1245789632" className="text-white">
                  91+ 1245789632
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 ">
              <h2>
                <Link className="text-white">Digitic.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Products Here.."
                  aria-label="Search Products Here.."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center text-white gap-10" to="Compare-Product">
                    <img src="images/compare.svg" alt="compare" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="Wishlist" className="d-flex align-items-center text-white gap-10">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="Login" className="d-flex align-items-center text-white gap-10">
                    <img src="images/user.svg" alt="user" />
                    <p>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="Cart" className="d-flex align-items-center text-white gap-10">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark"></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="header header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop Categories
                    </button>
                    <ul className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link to='/' className="dropdown-item">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className="dropdown-item">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className="dropdown-item">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="OurStore">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="Blog">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="Contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
