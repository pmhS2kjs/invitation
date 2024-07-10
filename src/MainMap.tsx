import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';
import { useEffect, useRef } from 'react';

const MainMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null); // Ref to hold the map instance

  useEffect(() => {
    // Load the Kakao Maps SDK script
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the Kakao Maps SDK
      const kakao = (window as any).kakao;
      kakao.maps.load(() => {
        const mapContainer = mapContainerRef.current; // DOM reference to the map container
        if (mapContainer) {
          const mapOption = {
            center: new kakao.maps.LatLng(37.5665, 126.978), // Center coordinates of the map
            level: 3, // Map zoom level
          };

          // Create the map and store it in the ref
          mapRef.current = new kakao.maps.Map(mapContainer, mapOption);
        }
      });
    };

    return () => {
      // Clean up the script tag if the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const kakao = (window as any).kakao;
      const markerPosition = new kakao.maps.LatLng(37.5665, 126.978);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(mapRef.current);
    }
  }, [mapRef.current]);

  return (
    <>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '300px', backgroundColor: 'lightblue' }}
      />
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
              <p>107, 114, 116, 160, 162, 163, 164, 257, 740,3002</p>
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
