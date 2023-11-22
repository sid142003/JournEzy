import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/CardSlider2.css';
import Uk from '../../assets/UK.jpg';

const CardSlider = () => {
  const cardData = [
    {
      title: 'Card 1',
      text: 'Dubai',
      image:Uk,
      price: 100,
      discount: 10,
     
    },
    {
      title: 'Card 2',
      text: 'USA',
      image:Uk,
      price: 100,
      discount: 10,
    },
    {
      title: 'Card 3',
      text: 'UK',
      image:Uk,
      price: 100,
      discount: 10,
    },
    {
      title: 'Card 4',
      text: 'Malaysia',
      image:Uk,
      price: 100,
      discount: 10,
    },
    // Add more card objects as needed
  ];

  return (
    
    // <Element name="section1" className="section">
    <div  className="testimo-card-slider">
      <h1>Trending This Winter</h1>
      {/* <div className='B'>  */}
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        // autoPlay
        // autoPlaySpeed={3000}
        centerMode={true}
        containerClass="containerc"
        customTransition="transform 300ms ease-in-out"
        dotListClass=""
        focusOnSelect={true}
        infinite
        itemClass="testimo-square-card2"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 2,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
         {cardData.map((item, index) => (
           <Card className="custom-card">
           <div className="upper-half">
             <img src={item.image} alt={item.title} className="card-img" />
           </div>
           <div className="lower-half">
             <div className="text-container">{item.text}</div>
             <div className="price-container">
               <p>Price: ${item.price}</p>
               <p>Discount: {item.discount}%</p>
             </div>
           </div>
         </Card>
        ))}


      </Carousel>
      </div>
     
    //  </Element>
  );
};

export default CardSlider;
