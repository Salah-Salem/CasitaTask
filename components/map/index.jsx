import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import { Entries } from '../../constants/feed'
import Marker from './marker'

const Map = ({ data }) => {
  const { Entry } = Entries

  const [center, setCenter] = useState({
    lat: data[0].lat,
    lng: data[0].lng,
  })

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        bootstrapURLKeys={{
          key: 'AIzaSyDKIrHpIyMYrcm2D5CFf-2r4QrwTJtHh-E',
        }}
        center={center}
        defaultZoom={2}
      >
        {data.map(({ lat, lng, id, sentiment, message }) => {
          return (
            <Marker
              key={id}
              lat={lat}
              lng={lng}
              text={id}
              type={sentiment}
              tooltip={sentiment + ' ' + message}
            />
          )
        })}
      </GoogleMapReact>
    </div>
  )
}

export default Map
