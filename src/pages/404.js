import React from 'react';
import notFoundImg from '../assets/images/404.png';

import Head from '../components/head';

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 not found"/>
            <h1>Page not found</h1>
            <img alt="page not found" src={notFoundImg} />
        </Layout>
    )
}

export default NotFound;
