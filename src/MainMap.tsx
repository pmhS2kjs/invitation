import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';
import { useEffect, useRef } from 'react';

const MainMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const latitude = 35.2190478;
  const longitude = 128.6014549;

  useEffect(() => {
    // Load the Kakao Maps SDK script
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_API_KEY
    }&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the Kakao Maps SDK
      const kakao = (window as any).kakao;
      kakao.maps.load(() => {
        const mapContainer = mapContainerRef.current; // DOM reference to the map container
        if (mapContainer) {
          const mapOption = {
            center: new kakao.maps.LatLng(latitude, longitude), // Center coordinates of the map
            level: 3, // Map zoom level
          };

          // Create the map and store it in the ref
          mapRef.current = new kakao.maps.Map(mapContainer, mapOption);

          // Create and add the marker

          const markerPosition = new kakao.maps.LatLng(35.2190478, 128.60138); // Marker coordinates
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(mapRef.current);
        }
      });
    };

    return () => {
      // Clean up the script tag if the component unmounts
      document.head.removeChild(script);
    };
  }, [latitude, longitude]);

  // Function to zoom in
  const zoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(mapRef.current.getLevel() - 1);
    }
  };

  // Function to zoom out
  const zoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(mapRef.current.getLevel() + 1);
    }
  };

  // Function to set map type
  const setMapType = (type: 'roadmap' | 'skyview') => {
    if (mapRef.current) {
      const kakao = (window as any).kakao;
      if (type === 'roadmap') {
        mapRef.current.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
      } else {
        mapRef.current.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      }
    }
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          ref={mapContainerRef}
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: 'lightblue',
          }}
        />
        <CustomTypeControl>
          <span
            id="btnRoadmap"
            className="selected_btn"
            onClick={() => setMapType('roadmap')}
          >
            지도
          </span>
          <span
            id="btnSkyview"
            className="btn"
            onClick={() => setMapType('skyview')}
          >
            스카이뷰
          </span>
        </CustomTypeControl>
        <CustomZoomControl>
          <span onClick={zoomIn}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
              alt="확대"
            />
          </span>
          <span onClick={zoomOut}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
              alt="축소"
            />
          </span>
        </CustomZoomControl>
      </div>
      <InnerLayout>
        <StyledInfo>
          <div>
            <h3>택시</h3>
            <p>마산역 택시승강장 탑승 시 10분 소요</p>
          </div>
          <div>
            <h3>버스</h3>
            <div>
              <p>어느정류장 하차</p>
              <p>107, 114, 116, 160, 163, 164, 257, 740,3002</p>
            </div>
            <div>
              <p>봉안공단 입구 하차</p>
              <p>162</p>
            </div>
            <div>
              <p>(주)동방 하차</p>
              <p>540</p>
            </div>
          </div>
          <div>
            <h3>주차안내</h3>
            <div>
              <p>
                내비게이션 '힐스카이 웨딩&컨벤션' 또는 '마산회원구 봉양로 133'
              </p>
              <p>2층 ~ 6층 주차장 무료 이용</p>
              <p>동방창원지사 주차장 / 2시간 무료</p>
            </div>
          </div>
        </StyledInfo>
      </InnerLayout>
    </>
  );
};

export default MainMap;

const CustomTypeControl = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  overflow: hidden;
  width: 130px;
  height: 30px;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-size: 12px;
  font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
  span {
    display: block;
    width: 65px;
    height: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    &.btn {
      background: #fff;
      background: linear-gradient(#fff, #e6e6e6);
    }
    &.btn:hover {
      background: #f5f5f5;
      background: linear-gradient(#f5f5f5, #e3e3e3);
    }
    &.btn:active {
      background: #e6e6e6;
      background: linear-gradient(#e6e6e6, #fff);
    }
    &.selected_btn {
      color: #fff;
      background: #425470;
      background: linear-gradient(#425470, #5b6d8a);
    }
    &.selected_btn:hover {
      color: #fff;
    }
  }
`;

const CustomZoomControl = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f5;
  span {
    display: block;
    width: 36px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 15px;
      height: 15px;
      border: none;
    }
    &:first-of-type {
      border-bottom: 1px solid #bfbfbf;
    }
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
  h3 {
    margin-bottom: 16px;
    ${({ theme }) => css`
      color: ${theme.color.gray800};
      ${theme.typography.content1Bold}
    `}
  }
  div > div {
    margin-bottom: 10px;
    p:first-of-type {
      margin-bottom: 8px;
    }
  }
`;
