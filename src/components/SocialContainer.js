import React from 'react'
import SocialButton from './SocialButton'

import 'font-awesome/css/font-awesome.css'

class SocialContainer extends React.Component {
    constructor(props) {
        super(props);

        this.colors = [
            'red',
            'orange',
            'royalblue',
            'purple'
        ];

        this.state = {  
            data: props.data
        }
    }

    _getRandomColor = () => {
        let index = Math.floor(Math.random() * this.colors.length);
        return this.colors[index]
    }

    render() {
        let buttonColor = this._getRandomColor();

        let buttons = this.state.data.map(({ iconName, url }) => 
            <SocialButton 
              style={{ display: 'inline-block' }}
              key={iconName}
              url={url}
              iconName={iconName} 
              color={buttonColor} /> 
        )

        return(
            <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
                {buttons}
            </div> 
        )
    }
}

export default SocialContainer;
