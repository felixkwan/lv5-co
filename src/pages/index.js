import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Works from "../components/works"
import About from "../components/about"
import Footer from "../components/footer"
import Business from "../components/business"
import Contact from "../components/contact"
import { Box } from "theme-ui"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: '100vh',
        }}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div
            p={4}
            bg='muted'
            >
              <Box sx={{
                mx: 'auto',
                maxWidth: '720px',
                pt: '2.5rem',
              }}>
                <h1 sx={{
                  px: 2,
                  py: 2,
                  mx: 'auto',
                }}>
                  We are a Hong Kong based design & development Team. We make web design, branding & Value.
                </h1>
              </Box>
          </div>
        </Box>
      <Business/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
    </Layout>
    </>
  )
}

export default IndexPage
