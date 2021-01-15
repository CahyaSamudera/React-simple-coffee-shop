import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <>
      <div className='my-50' id='produk'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center pt-5'>
              <h1 className='text-uppercase font-weight-bold'>
                Pilihan Produk
              </h1>
            </div>
          </div>
          <div className='content-4'>
            <ul className='nav' role='tablist'>
              <li className='nav-item nav-tabs'>
                <a
                  href='#pie'
                  className='active tab-item'
                  role='tab'
                  data-toggle='tab'
                >
                  <i className='fas fa-apple-alt'></i>
                  <span>Apple Pie</span>
                </a>
              </li>
              <li className='nav-item nav-tabs'>
                <a
                  href='#bread'
                  className='tab-item'
                  role='tab'
                  data-toggle='tab'
                >
                  <i className='fas fa-bread-slice'></i>
                  <span>Organic Bread</span>
                </a>
              </li>
              <li className='nav-item nav-tabs'>
                <a
                  href='#candy'
                  className='tab-item'
                  role='tab'
                  data-toggle='tab'
                >
                  <i className='fas fa-candy-cane'></i>
                  <span>Sugar Free Candies</span>
                </a>
              </li>
              <li className='nav-item nav-tabs'>
                <a
                  href='#cookie'
                  className='tab-item'
                  role='tab'
                  data-toggle='tab'
                >
                  <i className='fas fa-cookie'></i>
                  <span>Chocolate Cookies</span>
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div className='active tab-pane' role='tabpanel' id='pie'>
                <div className='row justify-content-md-center'>
                  <div className='col-md-3 offset-md-1'>
                    <h4>Home Made Apple Pie</h4>
                  </div>
                  <div className='col-md-7'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia ab totam animi eaque fuga repudiandae blanditiis
                      fugiat neque error veniam!
                    </p>
                  </div>
                </div>
              </div>
              <div className='tab-pane' role='tabpanel' id='bread'>
                <div className='row justify-content-md-center'>
                  <div className='col-md-3 offset-md-1'>
                    <h4>Home Made Organic Bread</h4>
                  </div>
                  <div className='col-md-4'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Maiores a, fuga laborum animi ducimus temporibus nihil quo
                      suscipit incidunt? Hic.
                    </p>
                  </div>
                  <div className='col-md-4'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi hic facilis voluptatum explicabo id repellat
                      labore sint accusamus nemo quas.
                    </p>
                  </div>
                </div>
              </div>
              <div className='tab-pane' role='tabpanel' id='candy'>
                <div className='row justify-content-md-center'>
                  <div className='col-md-4 offset-md-1'>
                    <h4>Sugar Free Candies</h4>
                  </div>
                  <div className='row pt-3'>
                    <div className='col-md-10 offset-md-1'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia consequuntur debitis modi quisquam maiores ducimus
                        soluta sunt deleniti laboriosam atque!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane' role='tabpanel' id='cookie'>
                <div className='row'>
                  <div className='col-md-4 offset-md-1'>
                    <h4>Home Made Chocolate Cookies</h4>
                  </div>
                  <div className='row'>
                    <div className='col-md-3 offset-md-1'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus quibusdam quis exercitationem deserunt architecto
                        fuga.
                      </p>
                    </div>
                    <div className='col-md-3'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae qui, voluptate obcaecati consequuntur
                        perferendis rerum.
                      </p>
                    </div>
                    <div className='col-md-3'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium quisquam eos, nulla aliquid officia quas.
                      </p>
                    </div>
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

export default Product;
