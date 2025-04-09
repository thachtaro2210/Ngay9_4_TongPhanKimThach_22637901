const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300 text-sm mb-4">
                Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email your feedback" 
                  className="bg-gray-800 text-white px-3 py-2 rounded-l outline-none text-sm flex-grow"
                />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-r text-sm">Send</button>
              </div>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Our Cooks</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">See Our Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">FAQ</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Gift Subscription</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Send Us Feedback</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Recipes</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">What to Cook This Week</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Pasta</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Dinner</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Healthy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Vegetarian</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Vegan</a></li>
                <li><a href="#" className="text-gray-300 hover:text-pink-400 text-sm">Christmas</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-lg font-bold">Chefify</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Chefify Company | Terms of Service | Privacy Policy
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            Made with Visily
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer