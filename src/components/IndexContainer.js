import React from 'react'

import 'flexboxgrid/css/flexboxgrid.min.css'

export default ({ children }) =>
    <div className="row center-xs" style={{ paddingTop: '15%' }}>
        <div className="col-xs-12">
            <div className="box">
                {children}
            </div>
        </div>
    </div>
