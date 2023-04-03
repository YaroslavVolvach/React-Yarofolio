import React from 'react';
import ASL_Fingerspelling_Game from '../assets/project/ASL_Fingerspelling_Game.png'
import ASL_Fingerspelling_Game from '../assets/project/cryptocoin'
import AstronoMy from '../assets/project/Astrono-My.png'
import YourWeather from '../assets/project/YourWeather.png'
import JATE from '../assets/project/JATE.png'
import quize from '../assets/project/quize.png'
import passwordGenerator from '../assets/project/password-generator.png'
import '../css/Portfolio.css'



import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Profile() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard>
          <a href='https://cryptocoin.herokuapp.com/'>
          <MDBCardImage
            src={cryptocoin}
            alt='cryptocoin'
            position='top'
          />
          </a>
          <MDBCardBody>
            <MDBCardTitle><a className='linkCard' href='https://cryptocoin.herokuapp.com/'>Crypto-Coin</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/vasilyl1/crypto-coin">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <a href='https://asl-fingerspelling-game.herokuapp.com/'>
          <MDBCardImage
            src={ASL_Fingerspelling_Game}
            alt='ASL_Fingerspelling_Game'
            position='top'
          />
          </a>
          <MDBCardBody>
            <MDBCardTitle><a className='linkCard' href='https://asl-fingerspelling-game.herokuapp.com/'>ASL Fingerspelling Game</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/johnxlai/asl-fingerspelling-game">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
        <a href='https://omgthegreenranger.github.io/Astrono-MyDashboard/'>
          <MDBCardImage
            src={AstronoMy}
            alt='AstronoMy'
            position='top'
          />
          </a>
          <MDBCardBody>
          <MDBCardTitle><a className='linkCard' href='https://omgthegreenranger.github.io/Astrono-MyDashboard/'>AstronoMy</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/omgthegreenranger/Astrono-MyDashboard">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <a className='linkCard' href='https://yaroslavvolvach.github.io/YourWeather/'>
          <MDBCardImage
            src={YourWeather}
            alt='YourWeather'
            position='top'
          />
         </a>
          <MDBCardBody>
            <MDBCardTitle><a className='linkCard' href='https://yaroslavvolvach.github.io/YourWeather/'>YourWeather</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/YaroslavVolvach/YourWeather">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <a className='linkCard' href='https://writecode.herokuapp.com/'>
          <MDBCardImage
            src={JATE}
            alt='WriteCode'
            position='top'
          />
          </a>
          <MDBCardBody>
            <MDBCardTitle><a className='linkCard' href='https://writecode.herokuapp.com/'>JATE</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/YaroslavVolvach/WriteCode">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <a className='linkCard' href='https://yaroslavvolvach.github.io/SuperQuiz/'>
          <MDBCardImage
            src={quize}
            alt='SuperQuize'
            position='top'
          />
         </a>
          <MDBCardBody>
            <MDBCardTitle><a className='linkCard' href='https://yaroslavvolvach.github.io/SuperQuiz/'>SuperQuize</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/YaroslavVolvach/SuperQuiz">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <a className='linkCard' href='https://yaroslavvolvach.github.io/SmartPasswordGenerator/'>
          <MDBCardImage
            src={passwordGenerator}
            alt='SuperPasswordGenerator'
            position='top'
          />
         </a>
          <MDBCardBody>
            <MDBCardTitle><a className='linkCard' href='https://yaroslavvolvach.github.io/SmartPasswordGenerator/'>SuperPasswordGenerator</a></MDBCardTitle>
            <MDBCardText>
              <a className='linkCard' href="https://github.com/YaroslavVolvach/SmartPasswordGenerator">GitHub Repository</a>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
