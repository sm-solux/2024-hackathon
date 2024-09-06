import React from 'react';
import styled from 'styled-components';
import dacoslogo from "../images/logo/dacos.png";
import soluxlogo from "../images/logo/solux.png";
import software from "../images/logo/software.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DacosLogo = styled.div`
  background-image: url(${dacoslogo});
  width: clamp(40px, 15vw, 50px);
  height: 30px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`

const SoluxLogo = styled.div`
  background-image: url(${soluxlogo});
  width: clamp(55px, 15vw, 70px);
  height: 30px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`

const SoftwareLogo = styled.div`
  background-image: url(${software});
  width: 180px;
  height: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px 20px;
  margin-bottom: 10px;
`

const EmailContainer = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

const InfoContainer = styled.div`
  margin-bottom: 10px;
`

const FooterInfoText = styled.p`
  color: #6B6B6B;
  font-size: calc(0.26vw + 7.08px);
  margin: 0px 7px 0px 0px;
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
      <footer className="text-dark py-3" style={{borderTop: "1px solid #2E2E2E"}}>
        <div className="container text-center"  style={{ padding: "0px", display:"flex", flexDirection: "column", justifyContent: "center"}}>
          <InfoContainer>
            <FooterInfoText>Made by SOLUX</FooterInfoText>

            <DevelopedTextContainer>
              <FooterInfoText>Devleoped by Sehee Kim</FooterInfoText>
              <FooterInfoText>Kiju Lee</FooterInfoText>
              <FooterInfoText>Jimin Lee</FooterInfoText>
            </DevelopedTextContainer>

            <ProducedTextContainer>
              <FooterInfoText>Produced by Youngseo Noh</FooterInfoText>
              <FooterInfoText>Designed by Jeongin Kim</FooterInfoText>
            </ProducedTextContainer>

          </InfoContainer>

          <EmailContainer>
            <FooterInfoText>DACOS | smdacos@gmail.com @smdacos_oficial</FooterInfoText>
            <FooterInfoText>SOLUX | sm.solux@gmail.com @only_solux</FooterInfoText>
          </EmailContainer>

          <LogoContainer>
            <DacosLogo />
            <SoftwareLogo />
            <SoluxLogo />
          </LogoContainer>
        </div>
      </footer>
    )
}

export default Footer;