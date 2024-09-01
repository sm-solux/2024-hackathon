import React from 'react';
import styled from 'styled-components';
import dacoslogo from "../images/logo/dacos.svg";
import soluxlogo from "../images/logo/solux.png";
import software from "../images/logo/software.svg";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const DacosLogo = styled.div`
  background-image: url(${dacoslogo});
  width: clamp(30px, 15vw, 45px);
  height: 30px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`

const SoluxLogo = styled.div`
  background-image: url(${soluxlogo});
  width: clamp(55px, 15vw, 70px);
  height: 35px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`

const SoftwareLogo = styled.div`
  background-image: url(${software});
  width: clamp(150px, 15vw, 170px);
  height: 43px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0px 20px;
`

const EmailContainer = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

const InfoContainer = styled.div`
  margin-top: 10px;
`

const FooterInfoText = styled.p`
  color: #6B6B6B;
  font-size: clamp(5px, 15vw, 8px);
  margin: 0px 5px 0px 0px;
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