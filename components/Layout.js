import Head from 'next/head'

import Header from "./Header";
import Navbar from "./Navbar"
import WhatsApp from "./WhatsApp";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <>
        <Header />
        <Navbar />

        {children}

        <WhatsApp />
        <Footer />
    </>
)

export default Layout;