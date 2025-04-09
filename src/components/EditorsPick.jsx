import { editorsPicks } from '../data'

const EditorsPick = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-pink-500">Editor's pick</h2>
          <p className="text-gray-600">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {editorsPicks.map((pick) => (
            <div key={pick.id} className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="w-1/3 h-48">
                <img src={pick.image || "/api/placeholder/200/200"} alt={pick.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-2/3 p-4 relative">
                <h3 className="font-semibold text-gray-800 text-lg">{pick.title}</h3>
                <div className="text-xs text-gray-500 mb-2">{pick.time} minutes</div>
                
                <div className="flex items-center mt-2 mb-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <img src={pick.authorImg || "/api/placeholder/30/30"} alt={pick.authorName} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-gray-600">{pick.authorName}</span>
                </div>
                
                <p className="text-gray-600 text-sm">{pick.description}</p>
                
                <button className="absolute top-4 right-4 bg-white p-1 rounded-full text-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditorsPick