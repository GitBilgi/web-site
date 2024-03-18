'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import * as S from './GoogleMaps.Style'

export function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCSwaAgUHFURfwE9nlNVjBtehvCb0Lu_CA'
  })
  const positions = [
    { lat: -22.39432306590823, lng: -47.578030331808215 },
    { lat: -8.277682747555193, lng: -35.97119713262611 }
  ]
  return (
    <S.Maps>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '1280px', height: '400px' }}
          center={positions[0]}
          zoom={3.7}
        >
          {positions.map((position, index) => (
            <Marker key={index} position={position} />
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </S.Maps>
  )
}
