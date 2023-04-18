import React from "react";
import BreadCrum from "../Components/BreadCrum";
import Meta from "../Components/Meta";
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BsInfoCircle} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <BreadCrum title="Contact" />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2354841.8527796757!2d77.10248208216609!3d22.90078887737317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1675935504572!5m2!1sen!2sin"
                width="550"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control"  placeholder="Name" />
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control"  placeholder="Mobile Number"/>
                    </div>
                    
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome  className="fs-5"/>
                        <address>Hno. 187 Near village Dalka Dist:- Khargone , Madhya Pradesh</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><BiPhoneCall className="fs-5"/>
                      <a href="91+ 7898290807">91+ 7898290809</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className="fs-5"/>
                      <a href="Piyush@gmail.com">Piyush@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><BsInfoCircle className="fs-5"/>
                      <p className="mb-0">Monday - Friday 10 PM to 8 PM</p>
                      </li>
                    </ul>
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

export default Contact;
