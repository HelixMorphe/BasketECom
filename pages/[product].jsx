import { useRouter } from 'next/router'
import Image from 'next/image'
import data from '../data'
import { useEffect, useState } from 'react'
function Product() {
  const router = useRouter()
  const query = router.query.product

  const [dataElement, setDataElement] = useState('')

  useEffect(() => {
    let element = data.find((item) => {
      return item.route === query
    })
    setDataElement(element)
  }, [])

  return (
    <div>
      <div className="h-[30vh] w-full rounded-b-3xl bg-orange-300">
        <div>
          <div className="relative h-[20vh] w-[70%]">
            <Image
              src="/img/orange.png"
              alt="orange"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="h-full border-2 border-black"></div>
    </div>
  )
}

export default Product
