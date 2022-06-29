import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import Marker from './marker'

const Map = ({ data }) => {
  const [center, setCenter] = useState({
    lat: data.length > 0 ? data[0]?.lat : 30.05114099635221,
    lng: data.length > 0 ? data[0]?.lng : 31.23614260476863,
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
