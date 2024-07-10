import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';

const MainContents = () => {
  return (
    <InnerLayout>
      <StyledText>
        서로 다른 길을 걷던 두 사람이 <br />
        이제 함께 한곳을 바라보며 걸어가려 합니다. <br />
        그 첫걸음을 내딛는 자리에 <br />
        함께 하시어 축복과 격려해 주시길 소망합니다.
      </StyledText>
      <StyledIntroText>
        <p>
          김정재&이지선 <span>의 장남</span> 준성
        </p>
        <p>
          박인기&이영선 <span>의 차녀</span> 민혜
        </p>
      </StyledIntroText>
    </InnerLayout>
  );
};

export default MainContents;

const StyledText = styled.p`
  line-height: 2.5;
  margin-bottom: 32px;
`;

const StyledIntroText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0 auto;
  gap: 16px;
  p {
    ${({ theme }) => css`
      color: ${theme.color.gray800};
      ${theme.typography.content1Bold}
    `}
    letter-spacing: 2.5px;
    span {
      ${({ theme }) => css`
        ${theme.typography.content3}
      `}
    }
  }
`;
