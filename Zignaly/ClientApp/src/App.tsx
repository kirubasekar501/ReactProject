import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Phones from './components/Phones';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Phones} />
    </Layout>
);
