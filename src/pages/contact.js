import React from 'react';
import Head from '../components/head';

import Layout from '../components/layout';

const ContactPage = () => {
    return (
            <Layout>
            <Head title="Contact"/>
            <h1>Contact Page</h1>
            <p> If you need me call me. You matter where you are, no matter how far.</p>
            <p>Linking to external site <a rel="noopener noreferrer" href="https://www.espn.com/soccer/?src=com" target="_blank">soccer</a></p>
            </Layout>
    )
}

export default ContactPage;