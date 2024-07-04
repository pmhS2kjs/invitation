import styled from '@emotion/styled';
import mainImg from './assets/img1.jpg';
import { css } from '@emotion/react';

const MainImage = () => {
  return (
    <StyledMainImg>
      <img src={mainImg} alt="main" />
      <StyledTitle>
        <p>날짜</p>
        <p>장소</p>
      </StyledTitle>
    </StyledMainImg>
  );
};

export default MainImage;

const StyledMainImg = styled.div`
  img {
    width: 100%;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 32px 16px;
  p {
    ${({ theme }) => css`
      color: ${theme.color.gray800};
      ${theme.typography.content1Bold}
    `}
  }
`;
