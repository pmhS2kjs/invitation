import styled from '@emotion/styled';
import EnterImage from './MainImage';
import MainContents from '@src/MainContents';
import MainGallery from '@src/MainGallery';
import MainCalendar from '@src/MainCalendar';
import MainMap from '@src/MainMap';
import MainHost from '@src/MainHost';
import Footer from '@src/Footer';
function App() {
  return (
    <StyledMainWrap>
      <EnterImage />
      <MainContents />
      <MainGallery />
      <MainCalendar />
      <MainMap />
      <MainHost />
      <Footer />
    </StyledMainWrap>
  );
}

export default App;

const StyledMainWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
