import React from 'react';
import { AiFillGithub, AiOutlineLineChart, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:alexcheung4c@gmail.com">alexcheung4c@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating - today and tomorrow.</Slogan>
          <div>Made with ❤️ using NextJs</div>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/machdragon" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alexcheung4c/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.tradingview.com/u/machdragon/#published-scripts" target="_blank" rel="noopener noreferrer">
        <AiOutlineLineChart size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
