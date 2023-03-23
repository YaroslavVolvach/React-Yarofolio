import React from 'react';
import '../css/Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white footer'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.volvachya@gmail.com' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/yaroslav-volvach-90a7a7245/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/YaroslavVolvach' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Toronto: 647-512-0813
      </div>
    </MDBFooter>
  );
}