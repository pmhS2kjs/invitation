import InnerLayout from '@src/InnerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const MainGallery = () => {
  return (
    <InnerLayout>
      <h2>갤러리</h2>
      <Swiper
        loop
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledTest>test1</StyledTest>
        </SwiperSlide>
        <SwiperSlide>
          <StyledTest>test2</StyledTest>
        </SwiperSlide>
        <SwiperSlide>
          <StyledTest>test3</StyledTest>
        </SwiperSlide>
        <SwiperSlide>
          <StyledTest>test4</StyledTest>
        </SwiperSlide>
      </Swiper>
    </InnerLayout>
  );
};

export default MainGallery;

const StyledTest = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`;
