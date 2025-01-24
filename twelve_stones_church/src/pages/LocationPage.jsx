import React from 'react';
import Map from '../components/Map';

const LocationPage = () => {

    return (
        <section id="locaion" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">오시는 길</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4 text-center">
                열두돌교회는 명학역에서 도보로 1분 거리에 위치하고 있습니다. <br />
                주소는 경기 안양시 만안구 덕천로 53, 3층입니다.
              </p>
            </div>
            <Map />
          </div>
        </section>
      )
};

export default LocationPage;