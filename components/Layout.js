import Footer from './footer';
import Navbar from './Navbar/Navbar';

export default function Layout({children}){
    return (
    <>
       <Navbar />
         <main style={{marginTop: '70px'}}>{children}</main>
       <Footer />
      
    </>
)
}