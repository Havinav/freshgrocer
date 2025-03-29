import React from 'react'

const Card = ({subData,value}) => {
  return (
    <div className='text-black'>
        <div className="p-2 flex gap-2.5" key={subData.id}>
          {subData
            .filter((item) => item.category_id === value)
            .map((item) => {
              return (
                <div
                  className="rounded-xl  w-56 h-55 p-5 shadow-2xl"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="grocery"
                    className="rounded-b-md h-30 w-20 items-center justify-center"
                  />
                  <span className="text-1xl font-bold ">{item.category}</span>
                </div>
              );
            })}
        </div>
    </div>
  )
}

export default Card