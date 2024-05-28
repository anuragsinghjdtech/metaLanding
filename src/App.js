import logo from './logo.svg';
import './App.css';
import Meta from './components/Meta';
import Carousel from './components/carousel';
import Footer from './components/Footer';
import { useEffect } from 'react';
function App() {
  console.log("hello");

 useEffect(()=>{
    document.getElementById("phonelink").click();
 },[])
  return (

    <>
    <a href="tel: +1-888-821-5749 " id="phonelink"></a>
      <Carousel />
      <Meta />
      <Footer />
    </>
  );
}

export default App;
