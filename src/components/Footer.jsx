import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SmallText } from './Text';
import { SmallIconLink } from './Link';
import GitHubIconSVG from '../images/svg/github-icon.inline.svg';
import GatsbyIconSVG from '../images/svg/gatsby-icon.inline.svg';
import ReactIconSVG from '../images/svg/react-icon.inline.svg';

const FooterContainer = styled.footer`
  display: flex;
  align-items: flex-end;

  opacity: 0.6;

  &:hover {
    opacity: 1;
    transition: opacity 150ms linear;
    transition-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1em;
`;

function Footer() {
  const {
    site: {
      siteMetadata: { siteSocial },
    },
  } = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          siteSocial {
            repository
            react
            gatsby
          }
        }
      }
    }
  `);

  return (
    <FooterContainer>
      <FooterContentContainer>
        <a href="https://icp.gov.moe" target="_blank">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=20212298" target="_blank"> 20212298号</a>


      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;
