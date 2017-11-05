import React from 'react'
import FontAwesome from 'react-fontawesome'

export default ({ url, iconName, color }) =>
    <a href={url} style={{ margin: '1rem', color: color }}>
        <FontAwesome name={iconName} />
    </a>
