module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.metaspexet.se',
        title: 'METAspexet',
        description: 'Den officiella hemsidan för METAspexet.',
        contact: 'direqtionen@metaspexet.se',
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/assets/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pastSpex`,
                path: `${__dirname}/src/past-spex`,
            },
        },
    ],
};
