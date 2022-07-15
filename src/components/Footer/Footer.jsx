import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinksItems>
                            <FooterLinkTitle> Contáctanos </FooterLinkTitle>
                            <FooterLink to='/mision'>Nosotros</FooterLink>
                            <FooterLink to='/mision'>Nosotros</FooterLink>
                            <FooterLink to='/mision'>Nosotros</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> Redes sociales </FooterLinkTitle>
                            <FooterLink to='/mision'>Nosotros</FooterLink>
                            <FooterLink to='/mision'>Nosotros</FooterLink>
                            <FooterLink to='/mision'>Nosotros</FooterLink>
                        </FooterLinksItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            MONTANA STUDIO
                        </SocialLogo>
                        <WebsiteRights>
                            Montana Studio © {new Date().getFullYear()} Todos los derechos reservados.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

    </>
  )
}

export default Footer