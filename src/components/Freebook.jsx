import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Cards from './Cards';
const Freebook = () => {
    const filterData = list.filter((data)=> data.category=== "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div >
            <h1 className='mt-4 font-semibold text-xl'>Free Offred Courses</h1>
            <p className='mt-4'>A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.</p>
            </div>
        
        <div className="slider-container mt-4">
        <Slider {...settings}>
            {
                filterData.map((item)=>(
                    <Cards item={item} key={item.Id}/>
                ))
            }
        </Slider>
        </div>
    </div>
    </>
  )
}

export default Freebook;