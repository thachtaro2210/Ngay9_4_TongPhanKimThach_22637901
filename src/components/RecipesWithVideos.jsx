import RecipeCard from './RecipeCard'
import { videoRecipes } from '../data'

const RecipesWithVideos = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-pink-500 text-center">Recipes With Videos</h2>
          <p className="text-gray-600 text-center">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecipesWithVideos