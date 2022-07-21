import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Style from "./Home.module.css";

const ProductSlide = ({list,number}) => {
    const properties1 = {
      slidesToShow:{number},
        slidesToScroll: 4,
        autoplay: false,
        indicators: true,
        transitionDuration: 100,
           responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: number,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      ]
      }
  return (
    <div>
        <Slide id={Style.na} {...properties1} >
        {list.map((el) => {
          el.quantity = 1;
          return (
            <div  id={Style.w1} key={el.id}>
              <div className={Style.q2} id={Style.t}>
                <img src={el.image} alt="no" style={{height:"150px",width:"150px"}}/>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <p className={Style.h1}>{el.name}</p>
                <div style={{display:"flex"}}><p >Offer Price :</p><p className={Style.pr}>₹{el.price}</p></div>
                <div style={{display:"flex"}}><p>M.R.P :</p> <p style={{textDecoration: "line-through"}}>₹{el.offer}</p></div>
                <p>You Save {el.save}%</p>
                <button className={Style.b1}>OFFERS AVAILABLE</button>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}

export default ProductSlide