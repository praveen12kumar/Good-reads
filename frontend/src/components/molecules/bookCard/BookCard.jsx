import React from 'react'
import { FaUser } from "react-icons/fa";

const BookCard = ({title, author, description}) => {
  return (
    <div className="mt-5 card card-side bg-gray-800 shadow-xl max-w-3xl h-60">
  <figure className='h-full'>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white text-2xl">{title}</h2>
    <div className="mt-20 flex justify-between items-center">
      <div className="flex flex-col gap-3 text-white text-xl">
        <div className="flex justify-start gap-5 items-center">
            <div className="">
                <FaUser/>
            </div>
            <div className="">
                {author}
            </div>
        </div>
        <div className="">{description}</div>
      </div>
      <div className="card-actions justify-end">
        <button className='btn btn-primary'>More Details</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default BookCard