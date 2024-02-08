import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
const Card = () => {

  const [like,setLike]=useState(false)
  const [likesCount,SetLikesCount] =useState(0)
  const toggleHeart=()=>{
   like? setLike(false):setLike(true);
   like? SetLikesCount(likesCount-1):SetLikesCount(likesCount+1)
  }

  return (
<div className="flex flex-col justify-center items-center h-screen shadow-2xl">
  <div className="card w-full md:w-3/4 lg:w-1/2 bg-base-100 relative flex flex-col rounded-lg max-w-xl bg-white bg-clip-border p-2 xl:p-6 mt-5">
      <div>Likes Count: {likesCount} </div>
      <figure>
        <img onClick={toggleHeart} 
             src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" 
             alt="Shoes" 
             className="w-full h-auto" />
      </figure>

      <div className="card-footer flex justify-between items-center bg-slate-500 mt-2 p-2 rounded-md">
        <div className="">
          <FaRegComment size="24px" />
        </div>

        <div className="badge badge-outline">Footer</div>
          <div onClick={toggleHeart}>
          {like ? <FcLike size="32px" /> : <FaRegHeart size="32px" />}
          {likesCount}
        </div>
      </div>
  </div>
</div>
  );
};

export default Card;


