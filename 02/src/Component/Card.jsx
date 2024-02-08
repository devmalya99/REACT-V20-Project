

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
     
    <div className="card w-full md:w-3/4 lg:w-1/2 bg-base-100 shadow-xl relative flex flex-col rounded-lg max-w-xl bg-white bg-clip-border shadow-3xl shadow-shadow-500 
          flex flex-col p-2 xl:p-6 mt-5 bg-white">

        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="w-full h-auto" />
        </figure>
      
        <div className="card-footer bg-slate-500 mt-2 p-2 rounded-md">
          <div className="badge badge-outline">Footer</div>
        </div>

    </div>
  </div>
)
}

export default Card