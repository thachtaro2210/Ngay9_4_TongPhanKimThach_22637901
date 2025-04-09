import a1 from "../assets/avatar.png";
import heroBackgroundImage from "../assets/Selection.png";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBackgroundImage}
          alt="Kitchen background"
          className="w-full h-190 object-cover"
        />
      </div>

     
      <div className="relative min-h-[600px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-md bg-white rounded-lg shadow-lg p-8 ml-8 md:ml-16">
            <div className="inline-block bg-yellow-400 px-4 py-1 rounded-full mb-4">Recipe of the day</div>
            <h1 className="text-3xl font-bold text-pink-500 mb-2">Salad Caprese</h1>
            <p className="text-gray-600 mb-6">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </p>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img src={a1} alt="Chef" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Salad Caprese</span>
            </div>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition flex items-center">
              View now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;