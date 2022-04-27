import React from 'react';
import Layout from '../../components/Layout';
import { graphql, Link } from 'gatsby';

const PastSpex = ({ data }) => {
    console.log(data);
    console.log(data.allMarkdownRemark.edges);
    return (
        <Layout>
            <h1>Alla tidigare spex</h1>
            <Link to="/">test</Link>
        </Layout>
    );
};

export const query = graphql`
    query pastSpexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            nodes {
                frontmatter {
                    title
                    slug
                    featuredImg {
                        childImageSharp {
                            gatsbyImageData(
                                formats: [AUTO, WEBP]
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default PastSpex;
