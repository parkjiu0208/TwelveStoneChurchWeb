import { useEffect, useRef } from 'react';

function Map() {
  const mapRef = useRef(null);
  const lat = 37.38606824254386
  const lng = 126.93549543586867
  
  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 18, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);
  
  return (
     <div ref={mapRef} style={{ width: "800px", height: "450px" }}></div>
  );
}
export default Map;