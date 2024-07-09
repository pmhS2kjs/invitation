import styled from '@emotion/styled';
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
      <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />
      <StyledInfo>
        <p>버스</p>
      </StyledInfo>
    </>
  );
};

export default MainMap;

const StyledInfo = styled.div`
  display: flex;
`;
