import React from 'react'
import Category from './category/page'
import Banner2 from './components/banner2/page'
import GridBanner from './components/gridBanner/page'
import Hero from './components/hero/hero'
import Services from './components/services/page'
import OurProduct from '@/components/home/ourProducts'
import Slidebar from '@/components/home/sales'
import SellingProducts from '@/components/home/sellingProduct'



function Home() {
  return (
    <div className='overfolw-hidden'>
  
      <Hero/>
      <Slidebar/>
        <Category/>
        <SellingProducts/>
        <Banner2/>
        <OurProduct/>
        <GridBanner/>
        <Services/>
        
        
    </div>
  )
}

export default Home
