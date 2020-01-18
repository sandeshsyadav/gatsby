
const path = require('path');

// Used for Markdown
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}

// Used for Markdown
// Promise API
// exports.createPages = async ({graphql, actions}) => {
//   const { createPage } = actions;
//   // Get path to template
//   const blogTemplate = path.resolve('./src/templates/blog.js');
//   // get markDown data
//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields{
//               slug
//             }
//           }
//         }
//       } 
//     }
//   `)
//   // Create new pages
//   res.data.allMarkdownRemark.edges.forEach((edge) => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.fields.slug}`,
//       context : {
//         slug: edge.node.fields.slug
//       }
//     })
//   })
// }

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  // Get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js');
  // get markDown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
       edges {
         node {
           slug
         }
       }
     }
    }
  `)
  // Create new pages
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context : {
        slug: edge.node.slug
      }
    })
  })
}
