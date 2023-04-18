import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrum title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link to="/Blog"  className='d-flex align-items-center gap-10'><AiOutlineArrowLeft className='fs-4'/>Go Back to Blogs</Link>
                    <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                    <img src="images/blog-1.jpg" className='img-fluid w-100' alt="single" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero exercitationem eligendi doloremque quam dolore esse dolor, dolorem consequuntur sit. Nihil similique reiciendis molestias omnis sint aspernatur dolore doloribus cum veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, reprehenderit.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
