import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className='mb-0 text-white'>Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
            <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Your Email Address."
                  aria-label="Your Email Address."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
          <div className="container-xxl">
            <div className="row  justify-content-between">
              <div className='col-4'>
                <h4 className='text-white'>Contact Us</h4>
                <div>
                  <address className='text-white'>ADD: 127 Near vill Dalka <br />
                    Dist Khargone Madhya Pradesh <br />
                    Pincode:451001
                  </address>
                  <a href="tel:91+ 7898290800" className='mt-2 d-block mb-3 text-white'>91+ 7898290804</a>
                  <a href="Piyush@gmail.com" className='mt-2 d-block mb-3 text-white'>Piyush@gmail.com</a>
                  <div className="social_icons d-flex align-items-center gap-15">
                    <a className='text-white' href=""><BsLinkedin className='fs-4'/></a>
                    <a className='text-white' href=""><BsYoutube className='fs-4'/></a>
                    <a className='text-white' href=""><BsInstagram className='fs-4'/></a>
                    <a className='text-white' href=""><BsGithub className='fs-4'/></a>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white'>Information</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1' to="Privacy">Privacy Policy</Link>
                  <Link className='text-white py-2 mb-1' to="RefundPolicy">Refund Policy</Link>
                  <Link className='text-white py-2 mb-1' to="ShippingPolicy">Shipping Policy</Link>
                  <Link className='text-white py-2 mb-1' to="TermsCondition">Terms & Condition</Link>
                  <Link className='text-white py-2 mb-1'>Blog</Link>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white'>Account</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>About Us </Link>
                  <Link className='text-white py-2 mb-1'>FAQ's</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                </div>
              </div>
              <div className='col-2'>
                <h4 className='text-white'>Quick Links</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptop</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablets</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
            </div>
          </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&Copy: {new Date().getFullYear()}: Powered By Digitic.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
