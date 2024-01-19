import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';



export const Location = () => {
  return (
    <div style={{marginTop:'35px'}}>
    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />

  </div>
  )
}
