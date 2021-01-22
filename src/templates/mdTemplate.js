import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./mdTemplate.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout id={"docs-main"} title={frontmatter.title}>
      <div id="toc-container"/>
      <article id="docs-content" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`