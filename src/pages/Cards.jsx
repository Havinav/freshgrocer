import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" rounded-xl  text-white">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
              alt="grocery"
              className="rounded-xl"
            />
          </div>
          <div className="  rounded-xl  text-white">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              alt="grocery"
              className="rounded-xl"
            />
          </div>
          <div className="rounded-xl  text-white">
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