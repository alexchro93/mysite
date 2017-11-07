import React from 'react'
import SocialButton from './SocialButton'

import 'font-awesome/css/font-awesome.css'

class SocialContainer extends React.Component {
  constructor(props) {
    super(props)

    this.colors = ['red', 'orange', 'royalblue', 'purple']

    this.state = {
      data: props.data,
    }
  }

  _getRandomColor = () => {
    let index = Math.floor(Math.random() * this.colors.length)
    return this.colors[index]
  }

  render() {
    let buttonColor = this._getRandomColor()

    let buttons = this.state.data.map(({ iconName, url }) => (
      <SocialButton
        key={iconName}
        url={url}
        iconName={iconName}
        color={buttonColor}
      />
    ))

    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {buttons}
      </div>
    )
  }
}

export default SocialContainer
