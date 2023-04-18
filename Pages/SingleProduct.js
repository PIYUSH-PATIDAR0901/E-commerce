import React, { useState } from "react";
import Meta from "../Components/Meta";
import ReactStars from "react-rating-stars-component";
import BreadCrum from "../Components/BreadCrum";
import ProductCart from "../Components/ProductCart";
import Color from '../Components/Color'
import { Link } from "react-router-dom";



const SingleProduct = () => {
  
  const [order, setOrder] = useState(false);
  return (
    <>
      <Meta title="Product" />
      <BreadCrum title="Product" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg" alt="/" />
                </div>
              </div>
            </div>
            <div className="col-6">
                <div className="main-product-details">
                    <div className="border-bottom">
                    <h3 className="title">Kids Watches Bulk 10 Pack Multi Colored For Students</h3>
                    </div>
                    <div className="border-bottom py-3">
                        <p className="price">3000 /-</p>
                        <div className="d-flex align-items-center">
                        <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                        />
                       <p className="mb-0 gap-10 t-review">2 Reviews</p>
                        </div>
                        <a href="#review" className="review-btn">Write a Review</a>
                    </div>
                    <div className="border-bottom py-3">
                        <div className="d-flex gap-10 align-items-center">
                            <h3 className="product-heading">Type</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <h3 className="product-heading">Brand</h3>
                            <p className="product-data">Fertina</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <h3 className="product-heading">Categories</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <h3 className="product-heading">Tags</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <h3 className="product-heading">Availablity</h3>
                            <p className="product-data">In Stock</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <h3 className="product-heading">Color</h3>
                            <Color/>
                        </div>
                        <div className="d-flex gap-30 mt-4 align-items-center">
                        <button className="button border-0" type="submit">BUY NOW</button>
                    <Link to="/" className="button signup">ADD TO CART</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dignissimos sequi ex, aliquid deleniti odit quia deserunt
                  excepturi ullam voluptatibus, ipsa, nesciunt ipsum autem
                  laboriosam totam consectetur nemo obcaecati vero pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 id="review" className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {order && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div  className="review-form py-4">
                  <h4 className="mb-2">Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Aryan</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tenetur, quisquam deserunt labore, voluptas corrupti unde
                      esse magnam at provident, quis inventore excepturi qui
                      molestiae officia dolores incidunt natus! Eum, aperiam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCart />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
