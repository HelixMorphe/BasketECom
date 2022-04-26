import { Add, ArrowBackIosOutlined, Delete } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Remove from '@mui/icons-material/Remove'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
function cart() {
  const router = useRouter()
  const [trigger, setTrigger] = useState(0)
  const [request, setRequest] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [offer, setOffer] = useState(0)
  useEffect(() => {
    if (router.query.user === 'user1') {
      setSubTotal(129.5)
    }

    if (router.query.user === 'user2') {
      setSubTotal(210)
    }
  }, [router.query.user])
  return (
    <div className="min-h-screen bg-gray-50 p-4 ">
      <div className="flex items-center ">
        <Link href="/" passHref>
          <div className="flex-1">
            <ArrowBackIosOutlined className=" text-gray-800" />
          </div>
        </Link>
        <div className="flex-1 text-center text-base font-semibold text-gray-800">
          Order details
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mt-6">
        <div className="mb-6 text-2xl font-bold text-gray-800">My Cart</div>
        <div className="flex items-start justify-between rounded-2xl bg-white p-4 shadow-sm">
          <div className="relative h-[100px] w-[100px] rounded-2xl bg-red-50 p-6">
            <Image
              src={'/img/apple.png'}
              alt="apple"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex h-full flex-grow flex-col justify-between px-4">
            <div>
              <p className="text-base font-semibold">Apple</p>
              <p className="text-sm text-gray-500">Organic</p>
            </div>
            <div className="mt-6 flex flex-grow items-center justify-between">
              <div className="flex items-center">
                <div className="flex rounded-md bg-gray-300 p-2">
                  <Remove className="text-sm" />
                </div>
                <div className="mx-4">
                  {router.query.user === 'user1' ? 7 : 12}
                </div>
                <div
                  onClick={() => {
                    setTrigger(1)
                  }}
                  className="flex rounded-md bg-orange-500 p-2 text-white"
                >
                  <Add className="text-sm" />
                </div>
              </div>
              <motion.div whileTap={{ scale: 1.2 }}>
                <Delete className="text-gray-400" />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div whileTap={{ scale: 0.9 }} className="mt-6">
          <div className="text-2xl font-bold text-gray-800">
            Delivery Location
          </div>
          <div className="mt-6 flex items-center rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex items-center rounded-md bg-gray-200 p-4">
              <LocationOnIcon className=" text-orange-500" />
            </div>
            <div className="p-4">
              <p className="text-base font-bold text-gray-800">
                IIITDM Kancheepuram
              </p>
              <p className="text-sm text-gray-400">Chennai</p>
            </div>
          </div>
        </motion.div>
        <div className="mt-6">
          <div className="text-2xl font-bold text-gray-800">Order Info</div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500">SubTotal</div>
              <div className="font-bold text-gray-700">Rs {subTotal}</div>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="text-gray-500">Offer</div>
              <div className="font-bold text-gray-700">-Rs {offer}</div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-500">Total</div>
              <div className="text-2xl font-bold text-gray-700">
                Rs {!request ? subTotal : subTotal - offer}
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 py-4 ">
          <motion.div
            onClick={() => {
              setRequest(1)
              if (trigger === 1) {
                if (router.query.user === 'user1') {
                  setOffer(3.5)
                }
                if (router.query.user === 'user2') {
                  setOffer(12)
                }
              }
            }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-2xl ${
              request ? 'bg-gray-300 text-gray-600' : 'bg-orange-500 text-white'
            } py-3 text-center`}
          >
            {!request ? 'Request' : 'Requested'}
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="mt-2 rounded-2xl bg-orange-500 py-3 text-center text-white"
          >
            Checkout
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default cart
