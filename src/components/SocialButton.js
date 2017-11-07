import React from 'react'
import FontAwesome from 'react-fontawesome'

export default ({ url, iconName, color }) => (
  <a href={url} style={{ color: color }}>
    <FontAwesome name={iconName} />
  </a>
)
