const { graphql } = require('gatsby');
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve('src/templates/past-spex.js');

    const { data } = await graphql(`
        query PastSpex {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
            path: '/past-spex/' + node.frontmatter.slug,
            component: pageTemplate,
        });
    });
};
