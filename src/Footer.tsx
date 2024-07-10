import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 Minhye Park. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;
