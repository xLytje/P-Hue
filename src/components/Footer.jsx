import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 67px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src="../src/assets/bulb.png" alt="Lys" />
      <img src="../src/assets/home.png" alt="Forside" />
      <img src="../src/assets/settings.png" alt="Indstillinger" />
    </StyledFooter>
  );
};

export default Footer;
