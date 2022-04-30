import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import axios from 'axios'

const Home = () => {
  return <div>Hello</div>
    
  
}



export default Home
