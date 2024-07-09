import styled from '@emotion/styled';
import mainImg from './assets/img1.jpg';
import { css } from '@emotion/react';
import Lottie from 'lottie-react';
// import Sample from './assets/sample.json';
// import Sample2 from './assets/sample2.json';
import Sample3 from './assets/sample3.json';

const MainImage = () => {
  return (
    <StyledMainImg>
      <LottieContainer>
        <Lottie animationData={Sample3} loop />
      </LottieContainer>
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
  position: relative;
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

const LottieContainer = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  z-index: 1000;
`;
