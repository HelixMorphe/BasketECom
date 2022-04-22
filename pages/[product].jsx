import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavBar from '../components/Navbar'
import { ArrowBack } from '@mui/icons-material'
function Product() {
  const router = useRouter()

  return (
    <div className="">
      <div className="">
        <div className=" flex min-h-[40vh] flex-col rounded-b-2xl bg-red-500/70 p-4 shadow-2xl shadow-red-200">
          <div>
            <ArrowBack className="text-black" />
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
      </div>
    </div>
  )
}

export default Product
