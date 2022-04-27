import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import * as styles from '../styles/past-spex.module.css';

export const PastSpex = ({ data }) => {
    const { html } = data.markdownRemark;
    const { title } = data.markdownRemark.frontmatter;
    const image = getImage(data.markdownRemark.frontmatter.featuredImg);

    return (
        <Layout>
            <Container className={styles.pageContent}>
                <h1>{title}</h1>
                <GatsbyImage image={image} alt="Banner image" />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </Layout>
    );
};

export default PastSpex;

export const query = graphql`
    query PastSpex($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(
                            formats: [AUTO, WEBP]
                            layout: FIXED
                            placeholder: BLURRED
                        )
                    }
                }
                title
            }
        }
    }
`;
