import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>I am learning gatsby. Hopefully Sensei will like this</h2>
            <p>Using Gatsby's Link package</p><Link to="/contact">contact me</Link>   
        </Layout>
    )
}

export default IndexPage;