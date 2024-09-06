import styled from 'styled-components';

const ScrollIndicator = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  color: inherit;
  text-align: center;
`;

const ScrollIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(-45deg);
  animation: sdb 1.5s infinite;
  box-sizing: border-box;
  
  @keyframes sdb {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
`;

const ScrollLink = () => (
  <ScrollIndicator>
    <ScrollIcon />
  </ScrollIndicator>
);

export default ScrollLink;
