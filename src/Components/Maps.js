import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function Maps() {
    return (
        <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    )
 
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCqQafyWWkm4ewLlGzcaX76hNFMAt3U2pY')
  })(Maps)
