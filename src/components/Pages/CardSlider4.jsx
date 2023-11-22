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
      image:Uk
     
    },
    {
      title: 'Card 2',
      text: 'USA',
      image:Uk
    },
    {
      title: 'Card 3',
      text: 'UK',
      image:Uk
    },
    {
      title: 'Card 4',
      text: 'Malaysia',
      image:Uk
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
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
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
          <Card key={index}>
            <div className="card-overlay ">{item.text}</div>
             <img src={item.image} alt={item.title} className="card-img" /> 
            {/* <Card.Body> */}
            {/* <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body> */}
          </Card>
        ))}
      </Carousel>
      </div>
     
    //  </Element>
  );
};

export default CardSlider;
