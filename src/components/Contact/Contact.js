import React from 'react';
import Iframe from 'react-iframe';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section className='contact' id='kontak'>
        <div className='container'>
          <div className='text-center py-5'>
            <h2 className='py-3'>Kontak Kami</h2>
            <div className='mx-auto heading-line'></div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                id='map-container-google-1'
                className='z-depth-1-half map-container'
              >
                <Iframe
                  url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.615891070543!2d106.75417021385462!3d-6.314083663544405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef57baf9f7a1%3A0xcba155a7dfc8095a!2sprasta!5e0!3m2!1sen!2sid!4v1610182985933!5m2!1sen!2sid'
                  width='100%'
                  height='420px'
                  id='myId'
                  className='myClassname'
                  display='initial'
                  position='relative'
                  allowfullscreen=''
                  aria-hidden='false'
                  tabindex='0'
                />
                {/* <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.615891070543!2d106.75417021385462!3d-6.314083663544405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef57baf9f7a1%3A0xcba155a7dfc8095a!2sprasta!5e0!3m2!1sen!2sid!4v1610182985933!5m2!1sen!2sid'
                  width='100%'
                  height='420px'
                  frameborder='0'
                  style='border: 0'
                  allowfullscreen=''
                  aria-hidden='false'
                  tabindex='0'
                ></iframe> */}
              </div>
            </div>
            <form className='col-lg-6'>
              <div className='form-group'>
                <label for='email'>Email</label>
                <input
                  id='email'
                  className='form-control'
                  type='email'
                  aria-describedby='emailHint'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-group'>
                <label for='name'>Nama</label>
                <input
                  type='text'
                  id='name'
                  className='form-control'
                  placeholder='Nama'
                  required
                />
              </div>
              <div className='form-group'>
                <label for='message'>Pesan</label>
                <textarea
                  name='message'
                  id='message'
                  className='form-control'
                  rows='5'
                  placeholder='Pesan'
                  required
                ></textarea>
              </div>
              <button type='submit' className='btn hvr-right my-4 btn-lg'>
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
