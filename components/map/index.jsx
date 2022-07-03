import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import Marker from './marker'

const Map = ({ data, locations }) => {
  const [center, setCenter] = useState({
    lat: locations.length > 0 ? locations[0]?.lat : 30.05114099635221,
    lng: locations.length > 0 ? locations[0]?.lng : 31.23614260476863,
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
        {data.map((item, index) =>
          locations.map((loc) =>
            item.message.includes(loc.city) ? (
              <Marker
                key={index + 1}
                lat={loc.lat}
                lng={loc.lng}
                text={index + 1}
                type={item.sentiment}
                tooltip={item.sentiment + ' ' + item.message}
              />
            ) : null,
          ),
        )}
      </GoogleMapReact>
    </div>
  )
}

export default Map
