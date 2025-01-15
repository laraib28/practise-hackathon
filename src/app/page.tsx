import React from 'react'
import Category from './category/page'
import Banner2 from './components/banner2/page'
import GridBanner from './components/gridBanner/page'
import Hero from './components/hero/hero'
import OurProduct from './components/ourProduct/page'
import SellingProducts from './components/sellingProducts/page'
import Services from './components/services/page'
import Slidebar from './components/sales/page'



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
