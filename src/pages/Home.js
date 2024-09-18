import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Section_one from '../component/Section_one'
import Section_Two from '../component/Section_Two'

function Home() {
  return (
    <div>
      <Header />
      <Section_one />
      <div className='container'>
        <Section_Two />
      </div>
      <Footer />
    </div>
  )
}

export default Home