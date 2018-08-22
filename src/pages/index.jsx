import React from 'react'
import IndexContainer from '../components/IndexContainer'
import SocialContainer from '../components/SocialContainer'

const IndexPage = ({ data }) => (
  <IndexContainer>
    <h1 style={{ marginBottom: '1px' }}>Alex</h1>
    <h1>Chrostowski</h1>
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
