import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

const EmailContainer = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`

const InfoContainer = styled.div`
  margin-top: 10px;
`

const FooterInfoText = styled.p`
  color: #6B6B6B;
  font-size: xx-small;
  margin: 0px 15px 0px 0px;
`

const ProducedTextContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DevelopedTextContainer = styled.div`
  display: flex;
  justify-content: center;
`

function Footer() {
    return (
        <footer className="text-dark py-3">
        <div className="container text-center">
            <LogoContainer>
              <FooterInfoText>solux</FooterInfoText>
              <FooterInfoText>dacos</FooterInfoText>
              <FooterInfoText>소중대</FooterInfoText>
            </LogoContainer>

            <EmailContainer>
              <FooterInfoText>DACOS | smdacos@gmail.com</FooterInfoText>
              <FooterInfoText>@smdacos_oficial</FooterInfoText>
            </EmailContainer>

            <EmailContainer>
              <FooterInfoText>SOLUX | sm.solux@gmail.com</FooterInfoText>
              <FooterInfoText>@only_solux</FooterInfoText>
            </EmailContainer>

            <InfoContainer>
              <FooterInfoText>Made by SOLUX</FooterInfoText>

              <ProducedTextContainer>
                <FooterInfoText>Produced by Youngseo Noh</FooterInfoText>
                <FooterInfoText>Designed by Jeongin Kim</FooterInfoText>
              </ProducedTextContainer>

              <DevelopedTextContainer>
                <FooterInfoText>Devleoped by Sehee Kim</FooterInfoText>
                <FooterInfoText>Kiju Lee</FooterInfoText>
                <FooterInfoText>Jimin Lee</FooterInfoText>
              </DevelopedTextContainer>
            </InfoContainer>
        </div>
      </footer>
    )
}

export default Footer;