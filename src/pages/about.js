import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p> I am new to Gatsby.Trying to learn few new things</p>
            <p>If you need to contact me try <Link to="/contact">contact me page</Link></p>
        </Layout>
    )
}

export default AboutPage;