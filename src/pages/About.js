import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/putri-hero.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
// import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ayu Kinanthi Putri</span>
              </p>
              <h2 className="about__heading">UI/UX Designer</h2>
              <div className="about__info">
                <PText>
                  I am from Balikpapan, East Kalimantan. A place of beauty and
                  modern city. Since my childhood, i love art, design, writting
                  and music. I always try to design with new trend and writting
                  fiction. I also create music sheet for piano and choirs.
                  <br /> <br />
                  I started coding since I was in College. Coding is also an art
                  for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  Beside that, i also work as Web Designer, member of Paduan
                  Suara Mahasiswa Universitas Gadjah Mada (PSM UGM) and staff
                  Division of Public Relation & Multimedia, member of Developer
                  Study Club (DSC UGM) Batch 2, and internship at
                  Tutorial4Serangkai
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['SMA Negeri 2 Balikpapan']}
              />
              <AboutInfoItem
                title="College"
                items={['Gadjah Mada University major in Software Engineering']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem title="FrontEnd" items={['JavaScript', 'Java']} />
              <AboutInfoItem title="UI Design" items={['Figma', 'Adobe XD']} />
              <AboutInfoItem
                title="Graphic Design"
                items={['Photoshop', 'Illustrator']}
              />
              <AboutInfoItem
                title="Video Editing"
                items={['Filmora', 'Adobe Premiere']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2017-2018"
                items={['Vice Chairman of Smada Choir']}
              />
              <AboutInfoItem
                title="2019"
                items={['Liasion Officier LPS UGM 2019']}
              />
              <AboutInfoItem
                title="2020"
                items={['Branch Committe Vocal Group Porsenigama']}
              />
              <br />
              <AboutInfoItem
                title="2020"
                items={[
                  'Internship Student at Tutorial4Serangkai (Digital Creative Marketing)',
                  'Web Designer at GPIB Bukit Sion Balikpapan',
                ]}
              />
              <br />
              <br />
              <AboutInfoItem
                title="2021-Present"
                items={[
                  'Staff Division of Public Relationship and Multimedia',
                  'Finance Manager at ASSETS UGM',
                ]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
