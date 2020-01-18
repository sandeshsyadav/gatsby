import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import footerStyle from './footer.module.scss';

const Footer = () => {
    const footerData = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author, title
          }
        }
      }`)
    return (
        <footer className={footerStyle.footer}>
            <p>Created by {footerData.site.siteMetadata.author} © 2020</p>
        </footer>
    )
}

export default Footer;