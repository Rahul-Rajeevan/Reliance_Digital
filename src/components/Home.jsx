import React, { useContext } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { AppContext } from '../context/AppContext';
import Banner from './Banner';
import Footer from './Footer';
import Style from "./Home.module.css";
import ProductSlide from './ProductSlide';
import ProductSlide2 from './ProductSlide2';

const Home = () => {

    const {images,properties1,addItems1,addItems2,addItems3,addItems4,addItems5,
      addItems6,addItems7,addItems8, addItems9, addItems10}=useContext(AppContext)

    return (
    <div>
        <img src="https://www.reliancedigital.in/medias/Boot-Up-ICICI-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ0MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hmNS85ODYxNDY0NjIxMDg2LmpwZ3xmYzQzYzE3MTg1YTk5MjE5OWU4ZTE3ODYzNjU1ZmIxYzg1Mjc0YThjZmMyYWYxNGE2NjRmZjM2OTNkMTI5NDMx" alt="no"/>

        <Banner list={images}/>
        <ProductSlide list={addItems1}/>
        <ProductSlide list={addItems2}/>
        <div style={{display:"flex"}}>
          {addItems3.map(e=><img src={e} alt="no"/>)}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
          {addItems4.map(e=><img src={e} alt="no"/>)}
        </div>
        <Banner list={addItems5}/>
        <ProductSlide2 list={addItems6} />  
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
          {addItems7.map(e=><img src={e} alt="no"/>)}
        </div> 
        <div style={{display:"flex"}}>
          <div>
            <img src="https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE" alt='no'/>
          </div>
          <div style={{width:"70%", border:"red solid"}}>
          <ProductSlide list={addItems8}/>
          </div>
        </div>

        <div style={{display:"flex"}}>
          <div style={{width:"70%", border:"red solid"}}>
          <ProductSlide list={addItems9}/>
          </div>
          <div>
            <img src="https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1" alt='no'/>
          </div>
        </div>

        <div style={{display:"flex"}}>
          <div>
            <img src="https://www.reliancedigital.in/medias/Tablets.jpg?context=bWFzdGVyfGltYWdlc3w1NDUyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk4NjIyMDgwOTQyMzguanBnfDJkYTA3NzA1YWUxZmNiMGY0N2EzZjBjOTlkMTNiYzlkNjM5NjAxN2YzMWRjNjA3MjljNDExYzg3OGU1OTJhM2Y" alt='no'/>
          </div>
          <div style={{width:"70%", border:"red solid"}}>
          <ProductSlide list={addItems10}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home