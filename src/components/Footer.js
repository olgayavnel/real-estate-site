import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  padding: 3rem calc((100vw - 1300px) / 2);
  width: 100%;
  min-height: 600px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 3;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;

const Youtube = styled(FaYoutube)`
  ${Icons}
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>
              Let's find <br /> your Dream Home
            </h3>
          </Quote>
          <InfoWrap>
            <h4>Contact Us</h4>
            <Link to='/homes'>FAQ</Link>
            <Link to='/homes'>Support</Link>
            <Link to='/homes'>Questions</Link>
          </InfoWrap>
          <InfoWrap>
            <h4>Offices</h4>
            <Link to='/homes'>United States</Link>
            <Link to='/homes'>Europe</Link>
            <Link to='/homes'>Canada</Link>
          </InfoWrap>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Youtube />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Instagram />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Facebook />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <LinkedIn />
            </a>
          </SocialIcons>
          <Contact>
            <Button to='/homes'>
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
