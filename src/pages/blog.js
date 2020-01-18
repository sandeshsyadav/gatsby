import React from 'react';
import { Link, graphql, useStaticQuery} from 'gatsby';

import Layout from '../components/layout';
import blogStyle from './blog.module.scss'
import Head from '../components/head';


const BlogPage = () => {
   const cmsData =  useStaticQuery(graphql `
   query {
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
   `
   );
    // const markDowndata = useStaticQuery(graphql`
    // query {
    //   allMarkdownRemark {
    //     edges {
    //       node {
    //         frontmatter {
    //           title
    //           date
    //         }
    //         fields {
    //           slug
    //         }
    //       }
    //     }
    //   }
    // }
    // `)
    return (
        <Layout>
          <Head title="Blog"/>
            <h1> My blog</h1>
            {/* <ol className={blogStyle.posts}>
                {markDowndata.allMarkdownRemark.edges.map((edge, index) => {
                    return (
                        <li key={index} className={blogStyle.post}>
                          <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol> */}
            <ol className={blogStyle.posts}>
                {cmsData.allContentfulBlogPost.edges.map((edge, index) => {
                    return (
                        <li key={index} className={blogStyle.post}>
                          <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>

    )
}

export default BlogPage;