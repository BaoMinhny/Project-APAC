import React from 'react'
import Header from '../header/header'
import Footer from '../footer/Footer'

const layout = ({children }) => {
  return (
     <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default layout