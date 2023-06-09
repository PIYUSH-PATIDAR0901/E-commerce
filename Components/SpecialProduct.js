import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/watch.jpg" className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Havels</h5>
              <h6 className="title">Samsung Galaxy Note10+ Mobile Phone</h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">18000</span>
                <strike>&nbsp; 20000</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>Days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded p-2 bg-danger">1</span>
                  <span className="badge rounded p-2 bg-danger">1</span>
                  <span className="badge rounded p-2 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count mt-3">
                <p>Product 5</p>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
