import styled from '@emotion/styled';
import EnterImage from './MainImage';
import MainContents from '@src/MainContents';
import MainGallery from '@src/MainGallery';
function App() {
  return (
    <StyledMainWrap>
      <EnterImage />
      <MainContents />
      <MainGallery />
    </StyledMainWrap>
  );
}

export default App;

const StyledMainWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
