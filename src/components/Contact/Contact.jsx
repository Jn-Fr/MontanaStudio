import React from 'react'
import Map from './Map'
import credentials from './credentials'
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { 
  ContactContainer,
  ContactH1,
  ContactMap,
  ContactContent,
  ContactP
 } from './ContactElements';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.5.exp&key=${credentials.mapsKey}`;

const Contact = () => {
  return (
    <>
      <ContactContainer id='contact'>
        <ContactMap>
        <Map
            googleMapURL= {mapURL}
            containerElement= {<div style={{ height: '450px', width: '450px' }} />}
            mapElement= {<div style={{ height: '100%', width: '100%'}} />}
            loadingElement= {<p>Cargando</p>}
            />
        </ContactMap>
        <ContactContent>
            <ContactH1>CONTACTO</ContactH1>
          <ContactP> <HiLocationMarker /> Calle San Gregorio y Versalles, Centro Comercial Artesanal Quitus </ContactP>
          <ContactP> <HiPhone /> 098 4399 972 | 096 8559 810 </ContactP>
        </ContactContent>
      </ContactContainer>
    </>
  )
}

export default Contact