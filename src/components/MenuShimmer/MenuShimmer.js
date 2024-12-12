const MenuShimmer = () => {
    return (
      <div className="animate-pulse p-4">
        {/* Restaurant Info Shimmer */}
        <div className="w-6/12 mx-auto mb-8">
          <div className="h-8 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
        </div>
        
        {/* Menu Categories Shimmer */}
        {Array(4).fill("").map((_, index) => (
          <div key={index} className="w-6/12 mx-auto mb-6">
            {/* Category Header */}
            <div className="h-12 bg-gray-200 rounded-md mb-4"></div>
            
            {/* Menu Items */}
            <div className="space-y-4">
              {Array(3).fill("").map((_, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-center">
                  <div className="w-2/3">
                    <div className="h-5 bg-gray-200 rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                  </div>
                  <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MenuShimmer;
  