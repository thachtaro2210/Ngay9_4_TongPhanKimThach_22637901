import RecipeCard from './RecipeCard'
import { summerRecipes } from '../data'

const SummerRecipes = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-pink-500">This Summer Recipes</h2>
          <p className="text-gray-600">We have all your Independence Day sweets covered.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {summerRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SummerRecipes