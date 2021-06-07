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
  padding: 3rem 0rem;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 3rem 0rem;
`;
const Quote = styled.div``;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
`;
const Contact = styled.div``;

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

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>Let's find your dream home</h3>
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
