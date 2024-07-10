import InnerLayout from '@src/InnerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import Img2 from './assets/imgs/img2.jpg';
import Img3 from './assets/imgs/img3.jpg';
import Img4 from './assets/imgs/img4.jpg';
import Img5 from './assets/imgs/img5.jpg';

import { Pagination } from 'swiper/modules';

const MainGallery = () => {
  return (
    <InnerLayout layout="full">
      <Swiper
        loop
        pagination={{
          dynamicBullets: true,
        }}
        autoHeight={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledImg>
            <img src={Img2} alt="" />
          </StyledImg>
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg>
            <img src={Img3} alt="" />
          </StyledImg>
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg>
            <img src={Img4} alt="" />
          </StyledImg>
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg>
            <img src={Img5} alt="" />
          </StyledImg>
        </SwiperSlide>
      </Swiper>
    </InnerLayout>
  );
};

export default MainGallery;

const StyledImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;
