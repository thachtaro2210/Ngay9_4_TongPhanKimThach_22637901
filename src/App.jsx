// import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import SummerRecipes from './components/SummerRecipes'
// import RecipesWithVideos from './components/RecipesWithVideos'
// import EditorsPick from './components/EditorsPick'
// import Footer from './components/Footer'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
       <main>
        <Hero />
        {/* <SummerRecipes />
        <RecipesWithVideos />
        <EditorsPick /> */}
      </main>
      {/* <Footer />  */}
    </div>
  )
}

export default App