import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
const Home = () => {
  return (
    <div className="bg-gray-50 px-4 py-4">
      <Header />
      <div className="mt-4">
        <Searchbar />
      </div>
      <div className="mt-4">
        <Banner />
      </div>
      <div className="mt-4">
        <Categories />
      </div>
      <div className="mt-4">
        <BestSellers />
      </div>
    </div>
  )
}

export default Home
