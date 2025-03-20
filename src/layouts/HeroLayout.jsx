import { Outlet } from "react-router-dom";

import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function HeroLayout() {
  return (
    <>
    <Navbar />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default HeroLayout;