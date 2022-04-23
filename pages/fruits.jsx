import React from 'react'
import ProductMainCard from '../components/ProductMainCard'

function fruits() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <p className="text-center text-2xl font-semibold text-gray-800">Fruits</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <ProductMainCard />
        <ProductMainCard />
        <ProductMainCard />
        <ProductMainCard />
        <ProductMainCard />
      </div>
    </div>
  )
}

export default fruits
