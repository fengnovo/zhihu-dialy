import React from 'react'
import {render} from 'react-dom'
import '../node_modules/material-design-lite/material.min.js'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './js/Home'
import Detail from './js/Detail'
import CnodeHome from './js/CnodeHome'
import CnodeDetail from './js/CnodeDetail'
import './css/index.css'

import createHistory from 'history/createHashHistory'
const history = createHistory()


render(<Router history={history}>
             <Route render={({ location }) => {
                  return(
                        <div>
                            <Route location={location} exact path="/" component={Home} />
                            <Route location={location} path="/home" component={Home} />
                            <Route location={location} path="/detail/:id" component={Detail} />
                            <Route location={location} path="/cnodeHome/:id" component={CnodeHome} />
                            <Route location={location} path="/cnodeDetail/:id" component={CnodeDetail} />
                        </div>
                  )}}/>
        </Router> , document.getElementById('app'));