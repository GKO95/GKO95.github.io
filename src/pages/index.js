import * as React from "react"
import Layout from "../components/layout"

const __category__ = ["Programming", "Library", "Computer Science"];

const Docs = (props) => {
  const listGroups = props.groups.map((group, index) =>
      <li key={index}>{group}</li>
  )

  return (
    <div className="home-docs">{listGroups}</div>
  );
}

const IndexPage = () => {
  return (
    <Layout>
      <Docs groups={__category__}/>
      <a href="/docs/en.PRGMING_Python">Python</a>
      <a href="/docs/ko.PRGMING_Python">파이썬</a>
    </Layout>
  )
}

export default IndexPage
