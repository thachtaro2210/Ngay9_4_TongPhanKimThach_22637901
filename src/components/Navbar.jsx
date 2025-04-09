import { useState } from 'react'
import taki from "../assets/chef.svg"
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <a href="/" className="flex items-center">
              <div className="">
               
                <img src={taki} alt="" className='w-8 h-8 bg-pink-400 rounded-2xl' />
              </div>
              <span className="ml-2 text-2xl font-bold text-pink-500">Chefify</span>
            </a>
          </div>
          <div className="relative flex items-center"> {/* Giữ relative để định vị icon */}
  {/* Đặt icon ở bên trái */}
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2"> {/* Định vị tuyệt đối bên trái, căn giữa theo chiều dọc */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </span>
  {/* Input với padding bên trái để không đè lên icon */}
  <input
    type="text"
    placeholder="What would you like to cook?"
    // Thêm pl-10 (padding-left) và giữ pr-4 (padding-right)
    className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-64 outline-none"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-pink-500">What to cook</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">Recipes</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">Ingredients</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">Occasions</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">About Us</a>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-pink-500 border border-pink-500 px-4 py-1 rounded-full hover:bg-pink-50 transition">Login</button>
          <button className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600 transition">Subscribe</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar