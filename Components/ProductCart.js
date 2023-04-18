import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCart = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
      <div className={`${location.pathname === '/OurStore' ? `gr-${grid}` : "col-3"}`}>
        <Link to="/SingleProduct" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="wish" />
                </Link>
            </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="productImage" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
             <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus officia cumque iste? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p className="price">1200/-</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="addCart" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="addCart" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addCart" />
                </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === '/OurStore' ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="wish" />
                </Link>
            </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="productImage"/>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus officia cumque iste? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, non!</p>
            <p className="price">1200/-</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="addCart" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="addCart" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addCart" />
                </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCart;
