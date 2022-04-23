import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import ProductMainCard from '../components/ProductMainCard'

function fruits() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <ArrowBackOutlined />
        </div>
        <div>
          <p className="text-center text-2xl font-semibold text-gray-800">
            Fruits
          </p>
        </div>
        <div></div>
      </div>
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
