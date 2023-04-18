import React, { useState } from "react";
import BreadCrum from "../Components/BreadCrum";
import Meta from "../Components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../Components/ProductCart";
import Color from "../Components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid)
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrum title="OurStore" />

      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-titile">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-titile">Filter By</h3>
                <div>
                  <div>
                    <h5 className="sub-title">Availablity</h5>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="/" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="/" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex laign-items-center gap-10">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color/>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="color-1"
                    />
                    <label htmlFor="color-1" className="form-check-label">
                      S (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="color-2"
                    />
                    <label htmlFor="color-2" className="form-check-label">
                      M (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="color-3"
                    />
                    <label htmlFor="color-3" className="form-check-label">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-titile">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light rounded-3 py-2 px-3 text-dark">
                      Headphone
                    </span>
                    <span className="badge bg-light rounded-3 py-2 px-3 text-dark">
                      Laptop
                    </span>
                    <span className="badge bg-light rounded-3 py-2 px-3 text-dark">
                      Mobile
                    </span>
                    <span className="badge bg-light rounded-3 py-2 px-3 text-dark">
                      Watch
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-titile">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>2399/-</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>2399/-</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block">Sort By</p>
                    <select
                      name="sort-by"
                      id="SortBy"
                      className="form-control form-select"
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">Alphbetically A-Z</option>
                      <option value="title-descending">
                        Alphbetically Z-A
                      </option>
                      <option value="price-ascending">Price low to high</option>
                      <option value="price-descending">
                        Price high to low
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10 grid">
                    <p className="totalproduct mb-0">21 Product</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img src="images/gr.svg" onClick={()=>setGrid(12)} className="d-block img-fluid" alt="grid" />
                      <img src="images/gr2.svg" onClick={()=>setGrid(6)} className="d-block img-fluid" alt="grid" />
                      <img src="images/gr3.svg" onClick={()=>setGrid(4)} className="d-block img-fluid" alt="grid" />
                      <img src="images/gr4.svg" onClick={()=>setGrid(3)} className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                <ProductCart grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
