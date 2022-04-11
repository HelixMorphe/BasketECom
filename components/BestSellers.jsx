import React from 'react'
import ProductCard from '../components/ProductCard'
function BestSellers() {
  return (
    <div>
      {/* Heading */}
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Best Sellers</h2>
        <p className="text-sm font-semibold text-gray-400">See All</p>
      </div>
      <div className="mt-2">
        <ProductCard
          url="/img/broc2.png"
          color="bg-green-50"
          title="Broccoli"
          desc="Broccoli is a vegetable source of fiber"
          rating="4.9"
        />
      </div>
      <div className="mt-2">
        <ProductCard
          url="/img/bb.png"
          color="bg-blue-50"
          title="Blueberries"
          desc="Blueberries a good source of vitamin K1, vitamin C."
          rating="4.7"
        />
      </div>
      <div className="mt-2">{/* <ProductCard  /> */}</div>
    </div>
  )
}

export default BestSellers
