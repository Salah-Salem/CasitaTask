import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import { Entries } from '../../constants/feed'
import Marker from './marker'

const Map = () => {
  const { Entry } = Entries

  const [center, setCenter] = useState({
    lat: 24.771260333237798,
    lng: 46.614093132300674,
  })
  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y),
      )
    }
  }
  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e3ddd0',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ]

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        bootstrapURLKeys={{
          key: 'AIzaSyDKIrHpIyMYrcm2D5CFf-2r4QrwTJtHh-E',
        }}
        center={center}
        defaultZoom={2}
        distanceToMouse={distanceToMouse}
        // onGoogleApiLoaded={({ map, maps }) => {
        //   poses.map((item) => {
        //     return new maps.Marker({
        //       position: { lat: item.lat, lng: item.lng },
        //       map,
        //     })
        //   })
        // }}
        // options={{ styles: mapStyles }}
      >
        {Entry.map(({ lat, lng, id, sentiment, message }) => {
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
