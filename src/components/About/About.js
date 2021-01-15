import React from 'react';
import image1 from '../../images/coffee-3.jpg';
import image2 from '../../images/coffee-4.jpg';
import image3 from '../../images/coffee-5.jpg';
import image4 from '../../images/coffee-6.jpg';
import image5 from '../../images/coffee-7.jpg';
import './About.css';

const About = () => {
  return (
    <>
      <section id='about' className='py-5 about'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 my-4'>
              <h1 className='text-uppercase title-text display-3'>
                Tentang Kami
              </h1>
              <p className='text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                dolor quasi maxime sapiente eius?
              </p>
              <a href='#about' className='btn hvr-right my-4 text-capitalize'>
                Discover
              </a>
            </div>
            <div className='col-md-6 about-images my-4 d-none d-lg-block'>
              <img
                src={image1}
                alt='coffee'
                className='img-1 img-thumbnail about-img'
              />
              <img
                src={image2}
                alt='coffee'
                className='img-2 img-thumbnail about-img'
              />
              <img
                src={image3}
                alt='coffee'
                className='img-3 img-thumbnail about-img'
              />
              <img
                src={image4}
                alt='coffee'
                className='img-4 img-thumbnail about-img'
              />
              <img
                src={image5}
                alt='coffee'
                className='img-5 img-thumbnail about-img'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
