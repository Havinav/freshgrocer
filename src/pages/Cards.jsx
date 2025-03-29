import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="flex p-2 gap-10 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center bg-[#f5f5f5] mt-10 mb-10">
          <div className=" rounded-xl  text-white w-lg">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
              alt="grocery"
              className="rounded-xl"
            />
          </div>
          <div className="  rounded-xl  text-white w-lg">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              alt="grocery"
              className="rounded-xl"
            />
          </div>
          <div className="rounded-xl  text-white w-lg">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
              alt="grocery"
              className="rounded-xl"
            />
          </div>
        </div>
    </div>
  )
}

export default Cards