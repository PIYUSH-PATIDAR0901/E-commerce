import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrum title="Wishlist" />

      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
              <img
                    src="images/cross.svg"
                    alt="Cross"
                    className="position-absolute cross img-fluid"
                  />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi-3G Tablet</h5>
                <h6 className="price">2399/-</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
              <img
                    src="images/cross.svg"
                    alt="Cross"
                    className="position-absolute cross img-fluid"
                  />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi-3G Tablet</h5>
                <h6 className="price">2399/-</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
              <img
                    src="images/cross.svg"
                    alt="Cross"
                    className="position-absolute cross img-fluid"
                  />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi-3G Tablet</h5>
                <h6 className="price">2399/-</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
