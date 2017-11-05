import React from 'react'
import Link from 'gatsby-link'
import IndexContainer from '../components/IndexContainer'
import SocialContainer from '../components/SocialContainer'

const IndexPage = ({ data }) => (
    <IndexContainer>
        <div style={{ display: 'inline-block' }}>
            <h1 style={{
              letterSpacing: '0.2rem',
              marginBottom: '1px',
              display: 'inline-block',
              clear: 'both',
              float: 'left'}}>
                Alex
            </h1>
            <h1 style={{ letterSpacing: '0.3rem', clear: 'both', float: 'left' }}>
                Chrostowski
            </h1>
        </div>
        <SocialContainer data={data.site.siteMetadata.social} />
    </IndexContainer>
)

export default IndexPage

export const query = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          iconName
          url
        }
      }
    }
  }
`
