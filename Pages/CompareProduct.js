import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import Color from "../Components/Color";
const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrum title="Compare Products" />
      <div className="compare-product">
        <div className="compare-product-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="Cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="product-card-image">
                    <img src="images/watch.jpg" alt="Watch" />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                    Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <h6 className="price mt-3 mb-3">2399/-</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand</h5>
                        <p>Havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type</h5>
                        <p>Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availablity</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size</h5>
                        <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                            <p>XL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="Cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="product-card-image">
                    <img src="images/watch.jpg" alt="Watch" />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                     Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <h6 className="price mt-3 mb-3">2399/-</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand</h5>
                        <p>Havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type</h5>
                        <p>Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availablity</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size</h5>
                        <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                            <p>XL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="Cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="product-card-image">
                    <img src="images/watch.jpg" alt="Watch" />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                    Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <h6 className="price mt-3 mb-3">2399/-</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand</h5>
                        <p>Havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type</h5>
                        <p>Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availablity</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size</h5>
                        <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                            <p>XL</p>
                        </div>
                      </div>
                    </div>
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

export default CompareProduct;
