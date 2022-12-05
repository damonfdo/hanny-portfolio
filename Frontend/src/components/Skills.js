import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Typography, Branding, Illustration, LogoDesign, MotionGraphic, Packaging } from '../assets/img/index.js'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>What I Do?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={false}
                autoPlay
                autoPlaySpeed={1500}
                slidesToSlide={2}
                swipeable
                pauseOnHover
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={LogoDesign} alt="Logo Design" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={Typography} alt="Typography" />
                  <h5>Typography</h5>
                </div>
                <div className="item">
                  <img src={Packaging} alt="Packaging" />
                  <h5>Packaging</h5>
                </div>
                <div className="item">
                  <img src={Branding} alt="Branding" />
                  <h5>Branding</h5>
                </div>
                <div className="item">
                  <img src={Illustration} alt="Illustration" />
                  <h5>Illustration</h5>
                </div>
                <div className="item">
                  <img src={MotionGraphic} alt="Motion Graphic" />
                  <h5>Motion Graphic</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
