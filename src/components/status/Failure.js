import React from 'react'
import { useNavigate } from 'react-router-dom';

const Failure = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto w-full h-screen ">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="col-md-6 text-center">
          <div className="alert alert-danger text-center">
            <h4 className="alert-heading">Oops, something went wrong!</h4>
          </div>
          <a href='/'>
            <button className='p-3 bg-red-700 rounded text-white text-xs md:text-sm'>
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Failure
