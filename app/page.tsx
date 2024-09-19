import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import CTA from "./components/CTA";
import FeaturesList from "./components/FeaturesList";
import Testimonial from "./components/Testimonial";
import { BenchNine } from "next/font/google";
import Benifits from "./components/Benifits";
import Footer from "./components/Footer";
import TimeLine from "./components/TimeLine";
import Team from "./components/Team";


export default function Home() {
  return (
    
    <div >
    
       
       
    <main className="mx-7 " >
    
    <Header/>
    <div className="my-3 p-p"></div>
  <Features/>
  <CTA/>  
  <FeaturesList/>
  <Testimonial/>
  <Benifits/>
  <TimeLine/>
  <Team/>
  <CTA/>  
  <Footer/>
    </main>
    </div>
  );
}
