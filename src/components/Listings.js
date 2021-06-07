import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const Listings = ({
  heading,
  subheading,
  buttonLabel,
  image,
  subheading2,
  image2,
}) => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>{heading}</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src={image} alt='home' />
            <h2>{subheading}</h2>
            <InfoLink to='/homes'>
              <p>{buttonLabel}</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap>
            <Image
              src={image2}
              alt='home'
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>{subheading2}</h2>
            <InfoLink to='/homes'>
              <p>{buttonLabel}</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
