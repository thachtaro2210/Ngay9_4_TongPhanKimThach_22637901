const RecipeCard = ({ title, image, time, authorImg, authorName, description }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
        <div className="h-48 overflow-hidden">
          <img src={image || "/api/placeholder/300/200"} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              {authorImg && (
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <img src={authorImg} alt={authorName} className="w-full h-full object-cover" />
                </div>
              )}
              {authorName && <span className="text-xs text-gray-500">{authorName}</span>}
            </div>
            {time && <span className="text-xs text-gray-500">{time} minutes</span>}
          </div>
          <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    )
  }
  
  export default RecipeCard
  