import React from 'react';
import Video from '../../video/coffee-bg.mp4';
import image1 from '../../images/coffee-7.jpg';
import image2 from '../../images/coffee-4.jpg';
import image3 from '../../images/coffee-5.jpg';
import './Demand.css';

const Demand = () => {
  return (
    <>
      <div className='most-liked p-5' id='terpopuler'>
        <div className='video-container'>
          <video
            src={Video}
            className='bg-video'
            type='video/mp-4'
            autoplay
            muted
            loop
          />
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col text-center py-5'>
              <h1 className='text-uppercase text-color font-weight-bold'>
                Terpopuler
              </h1>
            </div>
          </div>

          <div className='row justify-content-around align-items-center'>
            <div className='col-xl-3 col-lg-4 col-sm rotate'>
              <div className='card text-center mb-3 coffee-card'>
                <div className='card-header'>
                  <h4 className='font-weight-light title-text'>Espresso</h4>
                </div>
                <div className='card-body'>
                  <img
                    src={image1}
                    alt='coffe-3'
                    className='img-fluid rounded'
                  />
                </div>
                <div className='card-footer'>With Muffin</div>
                <div className='back'>
                  <div className='back-content'>
                    <h1 className='text-uppercase font-weight-light'>
                      Only for
                    </h1>
                    <h3 className='mb-3'>35k</h3>
                    <a
                      href='https://wa.me/6281281873417'
                      className='btn hvr-right my-4 text-capitalize'
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm rotate'>
              <div className='card text-center mb-3 coffee-card'>
                <div className='card-header'>
                  <h4 className='font-weight-light title-text'>Cafe Latte</h4>
                </div>
                <div className='card-body'>
                  <img
                    src={image2}
                    alt='coffe-3'
                    className='img-fluid rounded'
                  />
                </div>
                <div className='card-footer'>With Croissant</div>
                <div className='back'>
                  <div className='back-content'>
                    <h1 className='text-uppercase font-weight-light'>
                      Only for
                    </h1>
                    <h3 className='mb-3'>40k</h3>
                    <a
                      href='https://wa.me/6281281873417'
                      className='btn hvr-right my-4 text-capitalize'
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm rotate'>
              <div className='card text-center mb-3 coffee-card'>
                <div className='card-header'>
                  <h4 className='font-weight-light title-text'>Cappucino</h4>
                </div>
                <div className='card-body'>
                  <img
                    src={image3}
                    alt='coffe-3'
                    className='img-fluid rounded'
                  />
                </div>
                <div className='card-footer'>With Cookies</div>
                <div className='back'>
                  <div className='back-content'>
                    <h1 className='text-uppercase font-weight-light'>
                      Only for
                    </h1>
                    <h3 className='mb-3'>45k</h3>
                    <a
                      href='https://wa.me/6281281873417'
                      className='btn hvr-right my-4 text-capitalize'
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demand;
