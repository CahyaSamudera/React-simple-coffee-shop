import React from 'react';
import './Navbar.css';
import background from '../../images/coffee-2.jpg';

const Navbar = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), 
url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <>
      <header style={backgroundStyle} id='home'>
        <nav className='navbar navbar-expand-lg nav-menu'>
          <a href='#home'>
            <i className='fas fa-mug-hot fa-3x'></i>
          </a>
          <button
            className='navbar-toggler nav-button'
            type='button'
            data-toggle='collapse'
            data-target='#navbar'
          >
            <div className='bg-light bar1'></div>
            <div className='bg-light bar2'></div>
            <div className='bg-light bar3'></div>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end text-uppercase font-weight-bold'
            id='navbar'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a href='#about' className='nav-link m-2 menu'>
                  Tentang Kami
                </a>
              </li>
              <li className='nav-item'>
                <a href='#produk' className='nav-link m-2 menu'>
                  Produk
                </a>
              </li>
              <li className='nav-item'>
                <a href='#terpopuler' className='nav-link m-2 menu'>
                  Terpopuler
                </a>
              </li>
              <li className='nav-item'>
                <a href='#kontak' className='nav-link m-2 menu'>
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='text-light text-right banner'>
          <h1 className='display-4 text-center font-weight-bold heading'>
            Welcome to Ngopi Yuk!
          </h1>
          <p className='main text-center'>
            Kedai Kopi Klasik dengan Cita Rasa Istimewa
          </p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
