import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../views/Home/Home';

export default [
    { path: '/', component: <Route path='/' component={Home} /> }
]