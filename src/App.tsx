import { useState } from 'react'
import SearchBar from './components/SearchBar'

import './App.css'

function App() {


  return (
    <>
     <div className="flex flex-col justify-center items-center  mt-48">
  <h1 className="text-2xl font-semibold mb-4">Search App</h1>
  <SearchBar />
</div>

    </>
  )
}

export default App
