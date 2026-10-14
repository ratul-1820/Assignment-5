import React, { useState, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TechCard from './components/TechCard'
import YourStack from './components/YourStack'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)


  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50 text-lg font-medium text-slate-600">
        Loading Technologies...
      </div>
    )
  }

  return (
    <>
      <Toaster position="top-right" />
      
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-slate-50/50 p-6 md:p-12">
        <div className="mx-auto max-w-7xl mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Explore the <span className="text-pink-500">Technologies</span>
          </h1>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard key={tech.id} tech={tech} stack={stack} setStack={setStack} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <YourStack stack={stack} setStack={setStack} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App