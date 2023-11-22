import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '..//Styles/CardSlider.css';
import Uk from '../../assets/UK.jpg';

const CardSlider = () => {
  const cardData = [
    {
      title: 'Card 1',
      text: 'Dubai',
      image:Uk,
	  dis:'heloo'
     
    },
    {
      title: 'Card 2',
      text: 'USA',
      image:Uk,
	  dis:'helolo'
    },
    {
      title: 'Card 3',
      text: 'UK',
      image:Uk,
	  dis:'helool'
    },
    {
      title: 'Card 4',
      text: 'Malaysia',
      image:Uk,
	  dis:'hellloo'
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
        itemClass="testimo-square-card"
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
            items: 4,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
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
          <Card key={index} className="square-card">
            {/* <div className="card-overlay ">{item.text}</div> */}
			 <div className='over_div'>
			 <p className="overlay-text">{item.dis}</p>
				<div className='mask'></div>
			 </div>
             <img src={item.image} alt={item.title} className="card-img" /> 
            {/* <Card.Body> */}

          </Card>
        ))}
      </Carousel>
      </div>
     
    //  </Element>
  );
};

export default CardSlider;
