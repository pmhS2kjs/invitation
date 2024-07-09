import styled from '@emotion/styled';
import mainImg from './assets/img1.jpg';
import { css } from '@emotion/react';
import Lottie from 'lottie-react';
// import Sample from './assets/sample.json';
import Sample2 from './assets/sample2.json';
// import Sample3 from './assets/sample3.json';

const MainImage = () => {
  return (
    <>
      <StyledMainImg>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <path
            d="M 250,0
              L 500,0
              L 500,250
              L 500,700
              L 450,700
              L 450,250
              A 200,200 0 0,0 50,250
              L 50,700
              L 0,700
              L 0,250
              L 0,0
              Z"
            fill="#fff"
            stroke="#fff"
            stroke-width="100"
          />
        </svg>
        <LottieContainer>
          <Lottie animationData={Sample2} loop />
        </LottieContainer>
        <img src={mainImg} alt="main" />
      </StyledMainImg>
      <StyledTitle>
        <p>날짜</p>
        <p>장소</p>
      </StyledTitle>
    </>
  );
};

export default MainImage;

const StyledMainImg = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  img {
    width: 100%;
  }
  svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    /* top: -116px; */
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
  bottom: 0;
  z-index: 1000;
`;
