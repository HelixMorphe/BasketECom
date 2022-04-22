import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { LocationOnOutlined } from '@mui/icons-material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
function Product() {
  const router = useRouter()
  const [count, setCount] = useState(0)
  return (
    <div className=" min-h-[100vh] bg-gray-50">
      <div className="min-h-[40vh] bg-red-500/80">
        <div className=" flex min-h-[40vh] flex-col p-4 ">
          <div className="">
            <Link href="/" passHref>
              <ArrowBack className="text-black" />
            </Link>
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="w-full">
              <div className="relative mx-auto flex h-[300px] w-5/6 items-center justify-center">
                <div className="relative mx-auto h-[200px] w-5/6">
                  <Image
                    className="absolute top-0 left-0 z-30"
                    src="/img/apple.png"
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <Image
                  className="absolute top-0 left-0 "
                  src="/img/bg.svg"
                  alt="apple"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex min-h-[60vh] flex-col rounded-t-2xl  bg-gray-50 p-4">
          <div className="m-auto mb-4 h-[4px] w-[10vh] rounded-md bg-gray-500"></div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="w-full flex-1 text-[24px] font-bold text-gray-900">
                Apples
              </h2>
              <div className="flex w-full flex-[2] items-center justify-around text-sm">
                <div className="flex items-center">
                  <LocationOnOutlined className="text-orange-600" />
                  <p className="ml-1 text-gray-400">5km</p>
                </div>
                <div className="flex items-center">
                  <StarRateRoundedIcon className="text-orange-600" />
                  <p className="ml-1 text-gray-400">4.9</p>
                </div>
                <div className="flex items-center">
                  <WatchLaterIcon className="text-base text-orange-600" />
                  <p className="ml-1 text-gray-400">10-20 Min</p>
                </div>
              </div>
            </div>
            <p className="mt-1 text-base text-gray-400">Organic</p>
          </div>
          <div className="mt-5 flex flex-grow flex-col justify-between ">
            <div className="flex flex-col justify-between">
              <h2 className="text-base font-bold text-gray-800">Description</h2>
              <p className="mt-2 text-gray-500 ">
                An apple is an edible fruit produced by an apple tree. Apple
                trees are cultivated worldwide and are the most widely grown
                species in the genus Malus. The tree originated in Central Asia,
                where its wild ancestor, Malus sieversii, is still found today
              </p>
            </div>

            <div className="mt-5 flex w-full flex-grow">
              <div className="flex-1 text-gray-800">
                <h2 className="text-base font-bold text-gray-800">Price</h2>
                <div className="flex w-full items-center justify-between">
                  <p className="mt-1 flex-[2] text-2xl font-bold text-orange-500">
                    Rs {count === 0 ? 25 : 25 * count}
                  </p>
                  <div className="flex flex-1 items-center justify-between">
                    <div
                      onClick={() => {
                        if (count != 0) setCount(count - 1)
                      }}
                      className="rounded-md bg-gray-300 p-2"
                    >
                      <RemoveIcon />
                    </div>
                    <div className="font-semibold text-gray-700 ">
                      <p>{count} Kg</p>
                    </div>
                    <div
                      onClick={() => {
                        setCount(count + 1)
                      }}
                      className="rounded-md bg-orange-500 p-2"
                    >
                      <AddIcon className="text-gray-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
