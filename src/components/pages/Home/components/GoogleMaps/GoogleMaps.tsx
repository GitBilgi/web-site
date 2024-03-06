'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import * as S from './GoogleMaps.Style'

export function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCSwaAgUHFURfwE9nlNVjBtehvCb0Lu_CA'
  })
  const Position = {
    lat: -22.39432306590823,
    lng: -47.578030331808215
  }
  return (
    <S.Maps>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '1280px', height: '400px' }}
          center={Position}
          zoom={15}
        >
          <Marker position={Position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </S.Maps>
  )
}
