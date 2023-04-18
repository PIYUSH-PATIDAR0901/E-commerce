import React from "react";
import BreadCrum from "../Components/BreadCrum";
import Meta from "../Components/Meta";
import {MdDelete} from 'react-icons/md'
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrum title="Cart" />

      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between">
                <h4 className="cart col-1">Product</h4>
                <h4 className="cart col-2">Price</h4>
                <h4 className="cart col-3">Quantity</h4>
                <h4 className="cart col-4">Total</h4>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center">
                <div className="cart col-1 d-flex gap-15 align-items-center">
                  <div>
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>Havels</p>
                    <p>Size: M</p>
                    <p>Color: Gray</p>
                  </div>
                </div>
                <div className="cart col-2">
                  <h5 className="price">2399 /-</h5>
                </div>
                <div className="cart col-3 d-flex align-items-center gap-15">
                  <div>
                    <input type="number" min={1} max={10} className="form-control" />
                  </div>
                  <div>
                  <MdDelete className="text-danger"/>
                  </div>
                </div>
                <div className="cart col-4">
                <h5 className="price">2399 /-</h5>
                </div>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center">
                <div className="cart col-1 d-flex gap-15 align-items-center">
                  <div>
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>Havels</p>
                    <p>Size: L</p>
                    <p>Color: Gray</p>
                  </div>
                </div>
                <div className="cart col-2">
                  <h5 className="price">2399 /-</h5>
                </div>
                <div className="cart col-3 d-flex align-items-center gap-15">
                  <div>
                    <input type="number" min={1} max={10} className="form-control" />
                  </div>
                  <div>
                  <MdDelete className="text-danger"/>
                  </div>
                </div>
                <div className="cart col-4">
                <h5 className="price">2399 /-</h5>
                </div>
              </div>
              <div className="col-12 py-2">
                <Link to="/" className="button">Continue To Shopping</Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: 4498 /-</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link className="button">Check Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
