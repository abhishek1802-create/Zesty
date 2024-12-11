import React from 'react'
import { CDN_URL } from '../../../utils/constants'

const ItemList = ({itemCards}) => {
  return (
    <div>
      {
        itemCards.map((item) => {
            return (
              <div key={item.card.info.id} className="p-4 m-2 border-b-2 border-gray-200 text-left flex justify-between hover:shadow-md transition-all duration-200 rounded-lg">
                <div className="w-9/12 flex flex-col gap-2 align-middle">
                  <span className="font-bold text-lg text-gray-800">{item.card.info.name}</span>
                  <span className="font-medium text-base text-gray-700">₹{item.card.info.price/100}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4 relative">
                  <img 
                    src={CDN_URL + item.card.info.imageId} 
                    className="w-full h-32 object-cover rounded-lg shadow-md" 
                    alt={item.card.info.name}
                  />
                  <div className="absolute bottom-2 left-4">
                    <button className="px-3 py-1 bg-black text-white font-semibold rounded-lg shadow-lg 
                      hover:bg-gray-800 active:scale-95 transition-all duration-200 
                      flex items-center gap-1 text-sm">
                      Add <span className="text-lg">+</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })          
      }
    </div>
  )
}

export default ItemList
