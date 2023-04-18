import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>1 Dec 2022</p>
                <h5 className='title'>A Beautiful Sunday Morning Remaissance</h5>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita beatae quaerat odio!</p>
                <Link className='button' to='/SingleBlog'>Read More</Link>
            </div>
        </div>
    </>
  )
}

export default Blogs
