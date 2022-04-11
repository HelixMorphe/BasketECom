import React from 'react'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'
function ProductCard({ url, color, title, desc, rating }) {
  return (
    <div>
      <div className="flex rounded-2xl bg-white p-5 shadow-sm ">
        <div className={`rounded-2xl bg-green-50 p-5`}>
          <div className="relative h-[60px] w-[60px]">
            <Image src={url} alt="brocolli" layout="fill" />
          </div>
        </div>
        <div className="flex w-full justify-center ">
          <div className="flex w-[80%] flex-col">
            <h2 className="text-base font-bold">{title}</h2>
            <p className="pt-1 text-[14px] leading-4 text-gray-400">{desc}</p>
            <p className="mt-2 flex items-center">
              <StarIcon className="text-orange-400" />
              <p className="ml-1 font-bold">{rating}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
