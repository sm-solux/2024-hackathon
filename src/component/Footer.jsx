import React from 'react';
import styled from 'styled-components';
import dacoslogo from "../images/logo/dacos.svg";
import soluxlogo from "../images/logo/solux.png";
import software from "../images/logo/software.svg";

const LogoContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const DacosLogo = styled.div`
  background-image: url(${dacoslogo});
  width: 45px;
  height: 35px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`

const SoluxLogo = styled.div`
  background-image: url(${soluxlogo});
  width: 70px;
  height: 35px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 30px;
  margin-right: clamp(20px, 1.5vw, 40px);
`

const SoftwareLogo = styled.div`
  background-image: url(${software});
  width: 200px;
  height: 43px;
  background-size: contain;
  background-repeat: no-repeat;
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
  font-size: xx-small;
  margin: 0px 15px 0px 0px;
`

const LogoText = styled.p`
  font-size: small;
  font-weight: 400;
  margin-right: 10px;
  height: 35px;
  margin-bottom: 0px;
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
      <footer className="text-dark py-3" style={{  height: "150px", borderTop: "1px solid #2E2E2E"}}>
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
            <LogoText>주최</LogoText>
            <DacosLogo />
            <SoluxLogo />

            <LogoText>주관 </LogoText>
            <SoftwareLogo />
          </LogoContainer>
        </div>
      </footer>
    )
}

export default Footer;